import React from 'react'
import s from '../../css/PwResetConfirm.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export default function PwResetConfirm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = 'revisar'

    return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<div className={s.right}>
                        <h2>Cambia tu contraseña</h2>				
                        <p>Por favor ingresa una contraseña nueva</p>
                        <input type="email" placeholder='Contraseña' />
                        <input type="email" placeholder='Confirma tu contraseña' />
                        <button>Aceptar</button>
                    </div>
				</div>
				
			</div>
		</main>
	)
}
