import React from 'react'
import s from '../../css/PwReset.module.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { pwReset } from '../../redux/actions';


export default function PwReset() {

    const dispatch = useDispatch();
	const navigate = useNavigate()
	const [input, setInput] = useState({email:''})
	const [error, setError] = useState({email:''})
	const msg = useSelector(state => state.reducer.pwReset)
	const { register, handleSubmit, formState: {errors }, watch } = useForm();
	const onSubmit = data => {
		
		return dispatch(pwReset(data)).then(()=> {
			setTimeout(()=> {
				navigate('/')
			},10000)
		})
	}
	

	
	


	// function handleInput(e){
	// 	setInput({
	// 		...input,
	// 		[e.target.name]: e.target.value
	// 	})

	// }
	// function handleSubmit(e){
	// 	e.preventDefault(e);
	// 	dispatch(pwReset(input))
	// }
    return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<h2>Has olvidado tu contraseña?</h2>				
					<p>Por favor ingresa tu e-mail para restablecerla</p>
					<form onSubmit={handleSubmit(onSubmit)}>
					<input type="email" {...register ('email', {
						required: 'Debes ingresar tu email',
						pattern: {
							value: /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/igm,
							message: 'Ingresa un email válido'
						}
					})} 
						placeholder='e-mail' autoComplete='off' />
					{errors.email?.message? <p>{errors.email.message}</p>: msg.msg? <p className={s.msg}>En unos minutos recibirás un e-mail para cambiar tu contraseña</p>
					: null}
					<button type='submit'>Aceptar</button>
					</form>
				</div>
				
			</div>
		</main>
	)
}
