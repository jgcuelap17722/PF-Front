import React from 'react';
import s from '../../css/EmailConfirm.module.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function EmailConfirm() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const email = localStorage.getItem('email');

	function emailType(email){
		let emailUrl = 'https://www.' + email.split('@')[1] + '/mail';
		return emailUrl;
	}

	function handleSubmit(){
		navigate('/home');
	}

	return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<p>Usuario creado con éxito!.  Se ha enviado un correo de confirmación, por favor <a href={emailType(email)} target='_blank'>verifica tu bandeja</a> para poder iniciar sesión.</p>				
					<p>Recuerda que si has creado una cuenta como fundación, el estado se encontrará pendiente hasta ser aprobado el documento que nos has proporcionado.</p>
				</div>
				<button onClick={handleSubmit}>Aceptar</button>
			</div>
		</main>
	)
}