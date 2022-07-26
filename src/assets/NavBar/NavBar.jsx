import { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../icons/backArrow.svg';
import s from '../../css/NavBar.module.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as Favorites } from '../Favoritos.svg';
import { useDispatch } from 'react-redux';
import FavsMenu from '../FavMenu/FavsMenu';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth0 } from '@auth0/auth0-react';

export default function NavBar() {

	const token = localStorage.getItem('token');
	const userId = localStorage.getItem('userId');
	const userData = localStorage.getItem('user')
	const data = JSON.parse(userData)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ subMenu, setSubMenu ] = useState(false);
    const { isAuthenticated, user } = useAuth0();

    if(!isAuthenticated){
    	localStorage.removeItem('auth0User');
    }

	function favs(e) {
		e.preventDefault();
		const favAlert = alert('Debes iniciar sesión para ver tus favoritos');
		return favAlert;
	}

	function showSubMenu(){
		setSubMenu(true);

		if(subMenu){
			setSubMenu(false);
		}
	}

	

	// console.log(user);
	// console.log(auth0User);

	return (
		<nav>
			<div className={s.navTop}>
				<div className={s.logo}>
					<Link to='/'>
						<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="logo"  />
					</Link>
				</div>
				<Arrow className={subMenu ? s.subMenuArrowUp : s.subMenuArrow} onClick={showSubMenu} />
				<div className={s.registerLogin}>
					{/*<Link to='/favorites' onClick={ token ? '/favorites' : favs }>
					<Link to='/favorites' onClick={token ? '/favorites' : favs}>
						<Favorites className={s.favorites} />
					</Link>*/}


					{/*<Link to={token || isAuthenticated ? '/dashboard' : '/register' }>
						<p>{token ? <FontAwesomeIcon icon={faUser} className={s.userIcon} /> : isAuthenticated ? <div className={s.imgAuth0}><img src={user.picture} referrerpolicy="no-referrer" /></div> : 'Registro'}</p>
					</Link>*/}
					{/*<Link to={!token && !isAuthenticated  ? '/login' : '/login'}>
						<p onClick={isAuthenticated ? () => logout({returnTo: 'http://localhost:3000/login'}) : closeSesion}>{token || isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}</p>
					</Link>*/}
					{
						token || isAuthenticated
							? <FavsMenu userId={userId} />
							: <Link to="/register" >
								<p>Registro</p>
							  </Link>
					}
					{token || isAuthenticated
					? <UserMenu name={token ? data.user.name : user.given_name} lastName={token ? data.user.lastName : user.family_name} />
					: <Link to="/login" >
						<p>Iniciar Sesión</p>
					  </Link>							
					}
					
				</div>
			</div>
			<div className={subMenu ? s.navBottom : s.displayNone}>
				<div className={s.links}>
					<Link to='/about-us'>
						<p>Acerca de Nosotros</p>
					</Link>	
					<Link to='/pet-care'>
						<p>Cuidado Animal</p>
					</Link>
					<Link to='/foundations'>
						<p>Donaciones</p>
					</Link>
					<Link to='/faqs'>
						<p>FAQ's</p>
					</Link>
				</div>
			</div>

		</nav>
	)
}