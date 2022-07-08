import React, { useState } from 'react';
import NavBar from '../../assets/NavBar/NavBar';
import s from '../../css/Login.module.css';
import img from '../../assets/eye.png'
import { Link } from 'react-router-dom';

function validate (input) {
    let error = {};
    let regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/igm;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,50}$/;

    if (!input.email) {
        error.email = 'El email es requerido';
    }else if (!regexEmail.test(input.email)){
        error.email = 'Por favor ingresa un email válido';
    }
    if (!input.password){
        error.password = 'El Password es requerido';
    }else if (!regexPass.test(input.password)) {
        error.password = 'Min 8, Mayúscula, Minúscula, Número y Especial'
    }
    return error;
}

export default function Login() {

    //Validaciones
    //Leer el input del campo
    //validar con el regex
    //mostrar o no mostrar el error
    const [input, setInput] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState({})
    
    
    function handleChange (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
         });
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function showPassword (e){
        let inputPass = document.getElementsByName('password')
        inputPass[0].type === 'password'? inputPass[0].type = 'text': inputPass[0].type = 'password'
        console.log(inputPass)
    }

  return (
    <div>
        <NavBar></NavBar>
        <div className={s.content}>
            <div className={s.form}>
                <div className={s.overflow}>
                    <h1 className={s.title}>Iniciar Sesión</h1>
                    <div className={s.inputGroup}>
                        <input 
                            className={s.input}
                            id={error.email}
                            type="text" 
                            name='email'
                            placeholder='Correo Electrónico'
                            onChange={(e) => handleChange(e)}
                            />   
                            {error.email && <p className={s.error}>{error.email}</p>}
                    </div>
                    <div className={s.inputGroup}>
                        <input 
                            className={s.input}
                            id={error.password} 
                            type="password" 
                            name='password'
                            placeholder='Contraseña'
                            onChange={(e) => handleChange(e)}
                            />
                            <button id='inputBtn'onClick={showPassword}>👁</button>
                            {/* <img src={img} alt="img" />  */}
                            {error.password && <p className={s.error}>{error.password}</p>}
                    </div>
                    <button className={s.button}>Iniciar Sesión</button>
                    <Link to='/reset-password'>
                        <p className={s.forget}>Olvidé mi Contraseña</p>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}
