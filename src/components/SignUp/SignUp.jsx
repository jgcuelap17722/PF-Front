import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../assets/NavBar/NavBar.jsx';
import s from '../../css/SignUp.module.css';
import Footer from '../../assets/Footer/Footer';
import { getCitiesByCountry, createNewUser, resetNewUser, sendEmailConfirm } from '../../redux/actions.js';

export default function SignUp() {

	const dispatch = useDispatch();
	const cities = useSelector( state => state.reducer.citiesByCountry );
	const newUser = useSelector( state => state.reducer.newUser)
	const navigate = useNavigate();

	const { register,
			handleSubmit, 
			formState: { errors },
			watch, 
			setError, 
			clearErrors } = useForm();

	const role = watch("role");
	const email = watch("email");
	const selectCountry = watch("countryId");
	const watchPass = watch("password");
	const confirmPass = watch("confirmPassword");

	const onSubmit = data => {
			const emailObj = {email: email};
			dispatch(createNewUser(data)).then( () => {
				dispatch(sendEmailConfirm(emailObj));
			});
			localStorage.setItem('email', email);
			return;
	}
	
	useEffect( () => {

		if(selectCountry){
			dispatch(getCitiesByCountry(selectCountry));
		}

		if(watchPass){
			let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,50}$/;
			let error = "Min 8, Mayúscula, Minúscula, Número y un caracter especial";
			if(!passRegex.test(watchPass)){
				setError("password", {message: error} );
			}else{
				clearErrors("password.message");
			}
		}else if(!watchPass){
				clearErrors("password.message");
		}

		if(confirmPass){
			if(watchPass !== confirmPass){
				setError("confirmPassword", {message: "Las contraseñas no coinciden"} );
			}else{
				clearErrors("confirmPassword.message");
			}
		}

		if(newUser.Error){
			alert(newUser.Error);
			dispatch(resetNewUser())
			return;
		}else if(newUser.message){
			dispatch(resetNewUser())
			navigate('/email-confirm');
			return;
		}

	}, [selectCountry, watchPass, confirmPass, newUser])
	
	function showPassword(e){
		e.preventDefault(e);
		let inputPassword = document.getElementsByName('password');
		inputPassword[0].type === 'password' ? inputPassword[0].type = 'text' : inputPassword[0].type = 'password'
	}

	return (
		<div className={s.container}>
			<NavBar />
			<main>
				<div className={s.left}>
					<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Registro</h1>
						<div>
							<select {...register("role", { required: "Selecciona un tipo de cuenta"})}>
								<option value="" disabled selected hidden>Tipo de Cuenta</option>
								<option value="user">Usuario</option>
								<option value="foundation">Fundación</option>
							</select>
							{ errors?.role && <p className={s.error}>{errors.role.message}</p> }
						</div>
						
						<div>
							<input  {...register("name", { required: "Tus nombres son requeridos"})} 
									type="text" 
									placeholder="Nombres"
							/>
							{ errors?.name && <p className={s.error}>{errors.name.message}</p> }
						</div>
						<div>
							<input  {...register("lastName", { required: "Tus apellidos son requeridos" })}
									type="text" 
									placeholder="Apellidos" 
							/>
							{ errors?.lastName && <p>{errors.lastName.message}</p> }
						</div>
						<div>
							<select  {...register("countryId", { required: "Por favor selecciona un país" })}>
								<option value="" disabled selected hidden>País</option>
								<option value="ARG" >Argentina</option>
								<option value="CHL" >Chile</option>
								<option value="COL" >Colombia</option>
								<option value="ECU" >Ecuador</option>
								<option value="PER" >Perú</option>
							</select>
							{ errors?.countryId && <p>{errors.countryId.message}</p> }
						</div>
						<div>
							<select {...register("cityId", { required: "Por favor selecciona una ciudad" })}>
								<option value="" disabled selected hidden>Ciudad</option>
								{cities && cities.map( c => {
									return <option value={c.id}>{c.name}</option>
								})}
							</select>
							{ errors?.cityId && <p>{errors.cityId.message}</p> }
						</div>
						<div>
							<input  {...register("email", { 
										required: "Ingresa un correo electrónico válido",
										pattern: {
											value: /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/igm,
											message: "Ingresa un email válido"
										} })} 
									type="text" 
									placeholder="Correo Electrónico"
							/>
							{ errors?.email && <p>{errors.email.message}</p> }
						</div>
						<div>
							<input  {...register("password", { 
										required: "Debes ingresar una contraseña",
										pattern: {
											value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,50}$/,
											message: "Min 8, Mayúscula, Minúscula, Número y un caracter especial"
										}})} 
									type="password" 
									placeholder="Contraseña"
							/><button onClick={showPassword}>👁️</button>
							{ errors?.password && <p>{errors.password.message}</p> }
						</div>

						<div>
							<input  {...register("confirmPassword", { required: "Debes confirmar tu contraseña" })} 
									type="password" 
									placeholder="Confirmar Contraseña"
							/>
							{ errors?.confirmPassword && <p>{errors.confirmPassword.message}</p> }
						</div>
						{role === 'foundation' ?
						<div>
							<input   {...register("document", { required: "Por favor carga un documento válido" })} 
									type="file" 
									placeholder="Nombres" 
									accept="image/png, image/jpeg, image/jpg , .pdf"
									className={ role === 'foundation' ? s.fileInput : s.displayNone }
							/> 
							{ errors?.document && <p className={ role === 'foundation' ? s.fileInput : s.displayNone }>{errors.document.message}</p> }
						</div> : null}
						
						<button type="submit">Registrarme</button>
					</form>
				</div>
				<div className={s.right}>
					<div className={s.overflow}></div>
				</div>
			</main>
			<Footer />
		</div>
	)
}