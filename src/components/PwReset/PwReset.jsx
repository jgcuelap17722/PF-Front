import React from 'react'
import s from '../../css/PwReset.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export default function PwReset() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = 'revisar'

    function emailType(email){
		let emailUrl = 'https://www.' + email.split('@')[1] + '/mail';
		return emailUrl;
	}
    return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<h2>Has olvidado tu contraseña?</h2>				
					<p>Recuerda que si has creado una cuenta como fundación, el estado se encontrará pendiente hasta ser aprobado el documento que nos has proporcionado.</p>
				</div>
				{/* <button>Aceptar</button> */}
			</div>
		</main>
	)
}
