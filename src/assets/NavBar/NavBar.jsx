import React, { useEffect } from 'react';
import s from '../../css/NavBar.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Favorites } from '../Favoritos.svg';
import { resetUserLogged } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';
import FavsMenu from '../FavMenu/FavsMenu';
import UserMenu from '../UserMenu/UserMenu';

export default function NavBar() {

	const token = localStorage.getItem('token');
	const userId = localStorage.getItem('userId');
	const userData = localStorage.getItem('user')
	const data = JSON.parse(userData)
	const dispatch = useDispatch();

	console.log(data);

	function closeSesion() {

		if (token) {
			localStorage.removeItem('token');
			localStorage.removeItem('userId');
			localStorage.removeItem('user');
			localStorage.removeItem('userDetail');
			localStorage.removeItem('email');
			dispatch(resetUserLogged());
			return;
		}
	}

	function favs(e) {
		e.preventDefault();
		const favAlert = alert('Debes iniciar sesión para ver tus favoritos');
		return favAlert;
	}

	return (
		<nav>
			<div className={s.navTop}>
				<div>
					<Link to='/'>
						<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="logo" className={s.logo} />
					</Link>
				</div>
				<div className={s.registerLogin}>
					<Link to='/favorites' onClick={token ? '/favorites' : favs}>
						<Favorites className={s.favorites} />
					</Link>

					<Link to={token ? '/dashboard' : '/register'}>
						<p>{token ? 'Mi Perfil' : 'Registro'}</p>
					</Link>
					<Link to={'/login'}>
						<p onClick={closeSesion}>{token ? 'Cerrar Sesión' : 'Iniciar Sesión'}</p>
					</Link>
					{
						token
							? <UserMenu name={data.user.name} lastName={data.user.lastName} />
							: null
					}
					{
						token
							? <FavsMenu userId={userId} />
							: null
					}
				</div>
			</div>
			<div className={s.navBottom}>
				<div className={s.links}>
					<Link to='/about-us'>
						<p>Acerca de Nosotros</p>
					</Link>|
					<Link to='/pet-care'>
						<p>Cuidado Animal</p>
					</Link>|
					<Link to='/foundations'>
						<p>Donaciones</p>
					</Link>|
					<Link to='/faqs'>
						<p>FAQ's</p>
					</Link>
				</div>
			</div>

		</nav>
	)
}