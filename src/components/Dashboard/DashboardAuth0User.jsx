import React from 'react';
import s from '../../css/DashboardAuth0User.module.css';
import NavBar from '../../assets/NavBar/NavBar';
import Footer from '../../assets/Footer/Footer';
import { Link } from 'react-router-dom';

export default function DashboardAuth0User() {

	let auth0User = localStorage.getItem('auth0User');
    auth0User = JSON.parse(auth0User);
    // console.log(document.cookie.split(';'));

	return (
		<div>
			<NavBar />
			<div className={s.content}>
                    <h1>Mi Dashboard</h1>
                    <div className={s.dash}>
                        <div className={s.datos}>
                            <div className={s.selected}>
                                <h3>Sobre Mí</h3>
                            </div>
                            <div className={s.nonSelected}>
                                <Link className={s.link} to='/dashboard/mascotas'><h3>Mis Mascotas</h3></Link>
                            </div>
                            <div className={s.nonSelected}>
                                <Link className={s.link} to='/dashboard/adoptante'><h3>Perfil Adoptante</h3></Link>
                            </div>
                            <div className={s.nonSelected}>
                            {/*<Link className={s.link} to='/dashboard/foundation'><h3>Donaciones  Recibidas</h3></Link>:*/}
                            <Link className={s.link} to='/dashboard/donations'><h3>Donaciones  Realizadas</h3></Link>
                            </div>
                        </div>
                        <div className={s.infoContainer}>
                            <h2>Información Personal</h2>
                            <div className={s.inputContainer}>
                                <div className={s.left}>
                                    <div className={s.name}>
                                        <h4>Nombres</h4>
                                        <p>{auth0User.name}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>Teléfono</h4>
                                        {/*<input onChange={(e) => handleValue(e)} onBlur={(e) => handleBlur(e)} name="phone" value={value.phone ? value.phone : ` ${.phone ? .phone : ' '}`} type="text" />*/}
                                    </div>
                                    <div className={s.name}>
                                        <h4>País</h4>
                                       	<p>{auth0User.countryName}</p>
                                    </div>
                                </div>
                                <div className={s.right}>
                                    <div className={s.apellido}>
                                        <h4>Apellidos</h4>
                                        <p>{auth0User.lastName}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <h4>Email</h4>
                                        <p>{auth0User.email}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <h4>Ciudad</h4>
                                       	<p>{auth0User.cityId}</p>
                                    </div>
                                </div>
                            </div>
                            <Link to='/create-pet' className={s.link}>
                                <button className={s.button}>Agregar Mascota</button>
                            </Link>
                        </div>
                    </div>
                </div>
		</div>
	)
}