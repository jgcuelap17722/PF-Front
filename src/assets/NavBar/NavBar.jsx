import React from 'react';
import s from '../../css/NavBar.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../LogoIcon.svg';
import { ReactComponent as Favorites } from '../Favoritos.svg';

export default function NavBar() {
	return (
		<nav>
			<div className={s.navTop}>
				<div>
					<Link to='/'>
						<Logo className={s.logo} />
					</Link>
				</div>
				<div className={s.registerLogin}>
					<Link to='/favorites'>
						<Favorites className={s.favorites} />
					</Link>
					<Link to='/register'>
						<p>Registro</p>
					</Link>
					<Link to='/login'>
						<p>Iniciar Sesión</p>
					</Link>
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
					<Link to='/donations'>
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