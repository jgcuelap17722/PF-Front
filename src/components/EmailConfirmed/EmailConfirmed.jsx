import React from 'react';
import s from '../../css/EmailConfirmed.module.css';
import { useNavigate } from 'react-router';

export default function EmailConfirmed() {

	const navigate = useNavigate();

	function handleAccept(){
		navigate('/login');
	}

	return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<p>Email verificado correctamente!.</p>
					<p>Puedes iniciar sesión haciendo click en Aceptar.</p>				
				</div>
				<button onClick={handleAccept}>Aceptar</button>
			</div>
		</main>
	)
}