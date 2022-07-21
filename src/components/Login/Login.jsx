import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import NavBar from '../../assets/NavBar/NavBar';
import Footer from '../../assets/Footer/Footer';
import s from '../../css/Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { loginUser, resetUserLogged } from '../../redux/actions.js';
import { useDispatch, useSelector } from 'react-redux';

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

    const dispatch = useDispatch()
    const userLogged = useSelector( state => state.reducer.userLogged);
    const navigator = useNavigate();

    const [input, setInput] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState({})
    let inputPass = document.getElementsByName('password')
    useEffect(() => {
        
        window.scrollTo(0,0)
        if(userLogged.Error){
            Swal.fire({
                title: userLogged.Error,
                text: 'Dale click para corregir',
                icon: 'warning',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#66668F',
              })
            dispatch(resetUserLogged());
            return;
        }else if(userLogged.error){
            Swal.fire({
                title: userLogged.error,
                text: 'Dale click para corregir',
                icon: 'warning',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#66668F',
              })
            dispatch(resetUserLogged());
            return;
        }else if(userLogged.token){
            localStorage.setItem('token', userLogged.token);
            localStorage.setItem('userId', userLogged.user.id);
            localStorage.setItem('user', JSON.stringify(userLogged));
            navigator('/');
            return;
        }

    }, [input, userLogged, inputPass])

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
        e.preventDefault(e)
        let inputPass = document.getElementsByName('password')
        inputPass[0].type === 'password'? inputPass[0].type = 'text': inputPass[0].type = 'password'
    }
    function handleSubmit (e){
        e.preventDefault(e)
        if (error.email || error.password || !input.email || !input.password) {
            Swal.fire({
                title: 'Por favor ingresa los datos completos',
                text: 'Dale click a continuar para completar',
                icon: 'error',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#66668F',
              })
        }
        else dispatch(loginUser(input));
    }

  return (
    <div>
        <NavBar />
        <div className={s.content}>
            <form 
                    className={s.form}>
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
                    <form>
                        <div className={s.inputGroup}>
                            <input 
                                className={s.input}
                                id={error.password} 
                                type="password" 
                                name='password'
                                placeholder='Contraseña'
                                onChange={(e) => handleChange(e)}
                                />
                                <button id='inputBtn'onClick={showPassword}><FontAwesomeIcon icon={faEye}/></button>
                                {error.password && <p className={s.error}>{error.password}</p>}
                        </div>
                    </form>
                    <button onClick={(e)=>handleSubmit(e)}className={s.button} type='submit'>Iniciar Sesión</button>
                    <div className={s.textBox}>
                        <Link to='/reset'>
                            <p className={s.forget}>Olvidé mi Contraseña</p>
                        </Link>
                        <div className={s.registrate}>
                            <p>No estás registrado?</p>
                            <Link to='/register'>
                                <p className={s.forget}>Regístrate</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </form>
        </div>
        <Footer />
    </div>
  )
}
