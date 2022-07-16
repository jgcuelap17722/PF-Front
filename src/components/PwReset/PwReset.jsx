import React from 'react'
import s from '../../css/PwReset.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { pwReset } from '../../redux/actions';


export default function PwReset() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
	const [input, setInput] = useState({email:''})
	const [error, setError] = useState({email:''})
	const msg = useSelector(state => state.reducer.pwReset)

	


	function handleInput(e){
		setInput({
			...input,
			[e.target.name]: e.target.value
		})

	}
	function handleSubmit(e){
		e.preventDefault(e);
		dispatch(pwReset(input))
	}
    return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<h2>Has olvidado tu contraseña?</h2>				
					<p>Por favor ingresa tu e-mail para restablecerla</p>
					<input type="email" name={'email'}placeholder='e-mail' onChange={handleInput} autoComplete='off' />
					{msg.msg? <p className={s.msg}>Te hemos enviado un e-mail para cambiar tu contraseña</p>: null}
					<button onClick={(e)=>handleSubmit(e)}>Aceptar</button>
				</div>
				
			</div>
		</main>
	)
}
