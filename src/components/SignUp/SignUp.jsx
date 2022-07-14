import React, { useState, useEffect } from 'react';
import NavBar from '../../assets/NavBar/NavBar.jsx';
import { useNavigate } from 'react-router';
import s from '../../css/SignUp.module.css';
import Footer from '../../assets/Footer/Footer';
import { getCountries, getCitiesByCountry, createNewUser, resetNewUser, emailConfirmed } from '../../redux/actions.js';
import { useDispatch, useSelector } from 'react-redux';

export default function SignUp() {

	const dispatch = useDispatch();
	const countries = useSelector( state => state.countries );
	const cities = useSelector( state => state.citiesByCountry );
	const newUser = useSelector( state => state.newUser)
	const navigate = useNavigate();

	const [input, setInput] = useState({
		typeCount: '',
		name: '',
		lastName: '',
		countryId: '',
		cityId: 0,
		email: '',
		password: '',
		confirmPassword: '',
		document: ''
	})

	const [error, setError] = useState({});
	// const email = input.email;
	// const emailObj = {email: email};


	useEffect( () => {
		dispatch(getCountries());

		if(input.countryId === 'ARG'){
			dispatch(getCitiesByCountry('ARG'))
		}
		if(input.countryId === 'CHL'){
			dispatch(getCitiesByCountry('CHL'))                
		}
		if(input.countryId === 'COL'){
			dispatch(getCitiesByCountry('COL'))                
		}
		if(input.countryId === 'ECU'){
			dispatch(getCitiesByCountry('ECU'))                
		}
		if(input.countryId === 'PER'){
			dispatch(getCitiesByCountry('PER'))                
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

	}, [dispatch, input, newUser])
	
	function validate(input){

		let error = {};
		let regEx = {
			name: /[\d|\-|¿|'|?|.|,|=|~|¡|+|^]/i,
			lastName: /[\d|\-|¿|'|?|.|,|=|~|¡|+|^]/i,
			email: /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/igm,
			password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,50}$/
		}

		if(!input.typeCount){
			error.typeCount = 'Por favor selecciona un tipo de cuenta';
		}

		if(!input.name){
			error.name = 'Tus nombres son requeridos';
		}else if(regEx.name.test(input.name)){
			error.name = 'Ingresa solo caracteres válidos';
		}else if(input.name.length > 20){
			error.name = 'Tus nombres no pueden contener más de 20 carateres';
		}

		if(!input.lastName){
			error.lastName = 'Tus apellidos son requeridos';
		}else if(regEx.lastName.test(input.lastName)){
			error.lastName = 'Ingresa solo caracteres válidos';
		}else if(input.lastName.length > 20){
			error.lastName = 'Tus apellidos no pueden contener más de 20 carateres';
		}

		if(!input.countryId){
			error.countryId = 'Por favor selecciona un país';
		}

		if(!input.cityId){
			error.cityId = 'Por favor selecciona una ciudad';
		}

		if(!input.email){
			error.email = 'Tu email es requerido';
		}else if(!regEx.email.test(input.email)){
			error.email = 'Ingresa un email válido';
		}

		if(!input.password){
			error.password = 'Tu contraseña es requerida';
		}else if(!regEx.password.test(input.password)){
			error.password = 'Min 8, Mayúscula, Minúscula, Número y Especial';
		}

		if(!input.confirmPassword){
			error.confirmPassword = 'Debes confirmar tu contraseña';
		}else if(input.confirmPassword !== input.password){
			error.confirmPassword = 'Las contraseñas no coinciden'
		}

		let documentExt = input.document && input.document.split('.');
		documentExt = documentExt && documentExt[documentExt.length - 1];

		if(!input.document && input.typeCount === 'fundation'){
			error.document = 'Documento que acredite dicha fundación es requerido';
		}else if(documentExt !== 'png' && documentExt !== 'pdf' && documentExt !== 'jpeg' && documentExt !== 'jpg' ){
			error.document = 'Por favor carga un documento válido. .pdf | .png | .jpeg | .jpg son permitidos';
		}

		return error;

	}

	function handleChange(e){
		setInput({
			...input,
			[e.target.name]: e.target.value
		})

		setError(validate({
			...input,
			[e.target.name]: e.target.value
		}))
	}

	function showPassword(e){
		e.preventDefault(e)
		let inputPassword = document.getElementsByName('password');

		inputPassword[0].type === 'password' ? inputPassword[0].type = 'text' : inputPassword[0].type = 'password'

	}

	function handleSubmit(e){
		e.preventDefault(e)

		

		if(input.typeCount === 'user' || input.typeCount === ''){
			if( !input.name || 
				!input.lastName || 
				!input.typeCount || 
				!input.countryId || 
				!input.cityId || 
				!input.email || 
				!input.password || 
				!input.confirmPassword ||
				error.name || 
				error.lastName || 
				error.typeCount || 
				error.countryId || 
				error.cityId || 
				error.email || 
				error.password || 
				error.confirmPassword){
				alert('Por favor rellene todos los campos');
				return;
			}
		}
		
		if(input.typeCount === 'fundation'){
			if(error.name || 
				error.lastName || 
				error.typeCount || 
				error.countryId || 
				error.cityId || 
				error.email || 
				error.password || 
				error.confirmPassword ||
				error.document){
				alert('Por favor rellene todos los campos de fundación');
				return;
			}
		}
		const email = input.email;
		const emailObj = {email: email};
		dispatch(createNewUser(input)).then( () => {
			dispatch(emailConfirmed(emailObj));
		});
		localStorage.setItem('email', input.email);
		setInput({
			typeCount: '',
			name: '',
			lastName: '',
			countryId: '',
			cityId: '',
			email: '',
			password: '',
			confirmPassword: '',
			document: ''
		})

	}

	return (
		<div className={s.container}>
			<NavBar />
			<main>
				<div className={s.left}>
					<form>
					<h1>Registro</h1>
						<div>
							<select value={input.typeCount} name="typeCount" onChange={(e) => handleChange(e)}>
								<option value="">Tipo de Cuenta</option>
								<option value="user">Usuario</option>
								<option value="fundation">Fundación</option>
							</select>
							{ error.typeCount && <p>{error.typeCount}</p> }
						</div>
						
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="text" 
									placeholder="Nombres"
									name="name"
									value={input.name}
							/> 
							{ error.name && <p>{error.name}</p> }
						</div>
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="text" 
									placeholder="Apellidos" 
									name="lastName"
									value={input.lastName}
							/>
							{ error.lastName && <p>{error.lastName}</p> }
						</div>
						<div>
							<select value={input.countryId} name="countryId" onChange={(e) => handleChange(e)}>
								<option value="">País</option>
								{countries && countries.map( c =>
									<option value={c.id}>{c.name}</option>
								)}
							</select>
							{ error.countryId && <p>{error.countryId}</p> }
						</div>
						<div>
							<select value={input.cityId} name="cityId" onChange={(e) => handleChange(e)}>
								<option value="">Ciudad</option>
								{cities && cities.map( c =>
									<option value={c.id}>{c.name}</option>
								)}
							</select>
							{ error.cityId && <p>{error.cityId}</p> }
						</div>
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="text" 
									placeholder="Correo Electrónico"
									name="email"
									value={input.email}
							/>
							{ error.email && <p>{error.email}</p> }
						</div>
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="password" 
									placeholder="Contraseña"
									name="password"
									value={input.password}
							/><button onClick={showPassword}>👁️</button>
							{ error.password && <p>{error.password}</p> }
						</div>

						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="password" 
									placeholder="Confirmar Contraseña"
									name="confirmPassword"
									value={input.confirmPassword}
							/>
							{ error.confirmPassword && <p>{error.confirmPassword}</p> }
						</div>
						
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="file" 
									placeholder="Nombres" 
									accept="image/png, image/jpeg, image/jpg , .pdf"
									className={ input.typeCount === 'fundation' ? s.fileInput : s.displayNone }
									name="document" 
									value={input.document}
							/> 
							{ error.document && <p className={ input.typeCount === 'fundation' ? s.fileInput : s.displayNone }>{error.document}</p> }
						</div>
						
						<button type="submit" onClick={(e) => handleSubmit(e)}>Registrarme</button>
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