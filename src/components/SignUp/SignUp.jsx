import React, { useState } from 'react';
import NavBar from '../../assets/NavBar/NavBar.jsx';
import s from '../../css/SignUp.module.css';
import Footer from '../../assets/Footer/Footer';

export default function SignUp() {


	const [input, setInput] = useState({
		typeCount: '',
		names: '',
		lastnames: '',
		country: '',
		city: '',
		email: '',
		password: '',
		confirmPassword: '',
		document: ''
	})

	const [error, setError] = useState({});
	
	function validate(input){

		let error = {};
		let regEx = {
			names: /[\d|\-|¿|'|?|.|,|=|~|¡|+|^]/i,
			lastnames: /[\d|\-|¿|'|?|.|,|=|~|¡|+|^]/i,
			email: /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/igm,
			password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,50}$/
		}

		if(!input.typeCount){
			error.typeCount = 'Por favor selecciona un tipo de cuenta';
		}

		if(!input.names){
			error.names = 'Tus nombres son requeridos';
		}else if(regEx.names.test(input.names)){
			error.names = 'Ingresa solo caracteres válidos';
		}else if(input.names.length > 20){
			error.names = 'Tus nombres no pueden contener más de 20 carateres';
		}

		if(!input.lastnames){
			error.lastnames = 'Tus apellidos son requeridos';
		}else if(regEx.lastnames.test(input.names)){
			error.lastnames = 'Ingresa solo caracteres válidos';
		}else if(input.lastnames.length > 20){
			error.lastnames = 'Tus apellidos no pueden contener más de 20 carateres';
		}

		if(!input.country){
			error.country = 'Por favor selecciona un país';
		}

		if(!input.city){
			error.city = 'Por favor selecciona una ciudad';
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

		if(input.typeCount === 'user'){
			if( !input.names || 
				!input.lastnames || 
				!input.typeCount || 
				!input.country || 
				!input.city || 
				!input.email || 
				!input.password || 
				!input.confirmPassword ||
				error.names || 
				error.lastnames || 
				error.typeCount || 
				error.country || 
				error.city || 
				error.email || 
				error.password || 
				error.confirmPassword){
				alert('Por favor rellene todos los campos de usuario');
				return;
			}
		}
		
		if(input.typeCount === 'fundation'){
			if(error.names || 
				error.lastnames || 
				error.typeCount || 
				error.country || 
				error.city || 
				error.email || 
				error.password || 
				error.confirmPassword ||
				error.document){
				alert('Por favor rellene todos los campos de fundación');
				return;
			}
		}
		alert('Registrando usuario...');
		return;
	}


	return (
		<div className={s.container}>
			<NavBar />
			<main>
				<div className={s.left}>
					<form>
					<h1>Registro</h1>
						<div>
							<select name="typeCount" onChange={(e) => handleChange(e)}>
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
									name="names"
							/> 
							{ error.names && <p>{error.names}</p> }
						</div>
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="text" 
									placeholder="Apellidos" 
									name="lastnames"
							/>
							{ error.lastnames && <p>{error.lastnames}</p> }
						</div>
						<div>
							<select name="country" onChange={(e) => handleChange(e)}>
								<option value="">País</option>
								<option value="argentina">Argentina</option>
								<option value="colombia">Colombia</option>
								<option value="chile">Chile</option>
								<option value="ecuador">Ecuador</option>
							</select>
							{ error.country && <p>{error.country}</p> }
						</div>
						<div>
							<select name="city" onChange={(e) => handleChange(e)}>
								<option value="">Ciudad</option>
								<option value="city">Ciudad</option>
								<option value="city">Ciudad</option>
								<option value="city">Ciudad</option>
								<option value="city">Ciudad</option>
							</select>
							{ error.city && <p>{error.city}</p> }
						</div>
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="text" 
									placeholder="Correo Electrónico"
									name="email"
							/>
							{ error.email && <p>{error.email}</p> }
						</div>
						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="password" 
									placeholder="Contraseña"
									name="password"
							/><button onClick={showPassword}>👁️</button>
							{ error.password && <p>{error.password}</p> }
						</div>

						<div>
							<input  onChange={(e) => handleChange(e)} 
									type="password" 
									placeholder="Confirmar Contraseña"
									name="confirmPassword"
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