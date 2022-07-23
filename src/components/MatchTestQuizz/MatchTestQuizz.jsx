import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import NavBar from '../../assets/NavBar/NavBar.jsx';
import s from '../../css/MatchTestQuizz.module.css';
import Footer from '../../assets/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { postAdopterProfile, resetAdopterProfile } from '../../redux/actions.js';
import { useDispatch, useSelector } from 'react-redux';



export default function MatchTestQuizz() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const adopterProfile = useSelector( state => state.reducer.adopterProfile)
    const Navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()

        useEffect(() => {
          if(!token){
            Swal.fire({
                icon: 'info',
                title: 'Para guardar tus preferencias debes iniciar sesión o... Regístrate si no tienes una cuenta!',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Iniciar Sesión',
                confirmButtonColor: '#66668F',
                denyButtonText: `Registro`,
                denyButtonColor: `#4992AB`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Navigate('/login')
                } else if (result.isDenied) {
                    Navigate('/register')
                }
              })
          }
          
          return () => {
                dispatch(resetAdopterProfile())
                }
            }, [dispatch])

        useEffect(() => {
            if(adopterProfile?.message) {
                console.log('entré al dispatch')
                Swal.fire({
                icon: 'success',
                title: 'Hemos guardado tus preferencias',
                showConfirmButton: false,
                timer: 3500
            })
            }
            if (adopterProfile?.error){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ya tienes tus Match actualizados. Si quieres editarlos lo puedes hacer en tu perfil',
                showCancelButton: true,
                confirmButtonText: 'Ir al perfil',
                confirmButtonColor: '#66668F',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Navigate('/dashboard')
                    } 
                  })
            }
        }, [adopterProfile])
        
        const onSubmit = data => {

            if(token){
                dispatch(postAdopterProfile(data, token, userId))
            }
            else{
            Swal.fire({
                title: 'Para guardar los cambios debes iniciar sesión o Registrarte',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Iniciar Sesión',
                confirmButtonColor: '#66668F',
                denyButtonText: `Registro`,
                denyButtonColor: `#4992AB`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Navigate('/login')
                } else if (result.isDenied) {
                    Navigate('/register')
                }
              })
            }
        }
        
    
    return (
      <div>
        <NavBar/>
        
            <div className={s.content}>
                <h1>Queremos conocerte mejor, así te mostraremos las mascotas indicadas para ti!</h1>
                {!token?
                    <div className={s.subtitle}>
                    <p>Tienes cuenta con nosotros?</p>
                    <Link to='/login' className={s.link} >
                        <p>Inicia Sesión</p>
                    </Link>
                </div>:null
                }
                <div className={s.formContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.topForm}>
                           
                        </div>
                        <div className={s.textContainer}>
                            <label>Que tipo de mascota prefieres?</label>
                                <select {...register("type", { required: "Selecciona uno"})} className={errors.type? s.error:null}>
                                    <option value="">   </option>
                                    <option value="perro" >Perro</option>
                                    <option value="gato">Gato</option>
                                    <option value="ambos">Me gustan los 2</option>
                                </select>
                                
                        </div>
                        <div className={s.textContainer}>
                            <label>Ya has tenido Mascotas antes?</label>
                                <select {...register("haTenidoMascota",{ required: "Selecciona uno"})} className={errors.haTenidoMascota? s.error:null}>
                                    <option value="">   </option>
                                    <option value="Si">Si</option>
                                    <option value="No">No</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>De que edad te gustaría adoptar?</label>
                                <select {...register("age", { required: "Selecciona uno"})} className={errors.age? s.error:null}>
                                    <option value="">   </option>
                                    <option value="cachorro">Cachorro</option>
                                    <option value="joven">Joven</option>
                                    <option value="adulto">Adulto</option>
                                    <option value="adulto mayor">Adulto Mayor</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>Alguna preferencia de género?</label>
                                <select {...register("genre", { required: "Selecciona uno"})} className={errors.genre? s.error:null}>
                                    <option value="">   </option>
                                    <option value="macho">Macho</option>
                                    <option value="hembra">Hembra</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>Y su pelo...cómo lo prefieres?</label>
                                <select {...register("coat", { required: "Selecciona uno"})} className={errors.coat? s.error:null}>
                                    <option value="">   </option>
                                    <option value="sin pelo">Sin pelo</option>
                                    <option value="corto">Corto</option>
                                    <option value="mediano">Mediano</option>
                                    <option value="largo">largo</option>
                                    <option value="ondulado">Ondulado</option>
                                    <option value="rizado">Rizado</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>Has pensado en el tamaño?</label>
                                <select {...register("size", { required: "Selecciona uno"})} className={errors.size? s.error:null}>
                                    <option value="">   </option>
                                    <option value="pequeño">Pequeño (0 - 25 lbs)</option>
                                    <option value="mediano">Mediano (26 - 60 lbs)</option>
                                    <option value="grande">Grande (61 - 100 lbs)</option>
                                    <option value="extra grande">Extra Grande (101 lbs o más)</option>
                                </select>
                        </div>              
                        <input className={s.input}type="submit" />
                        
                    </form>
                </div>
            </div>
        <Footer/>
      </div>
    );
  
}
