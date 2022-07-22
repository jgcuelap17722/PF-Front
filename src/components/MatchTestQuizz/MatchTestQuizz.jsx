import React from 'react'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../assets/NavBar/NavBar.jsx';
import s from '../../css/MatchTestQuizz.module.css';
import Footer from '../../assets/Footer/Footer';
import { Link } from 'react-router-dom';


export default function MatchTestQuizz() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
      <div>
        <NavBar/>
            <div className={s.content}>
                <h1>Queremos conocerte mejor, así te mostraremos las mascotas indicadas para ti!</h1>
                <div className={s.subtitle}>
                    <p>Tienes cuenta con nosotros?</p>
                    <Link to='/login' className={s.link} >
                        <p>Inicia Sesión</p>
                    </Link>
                </div>
                <div className={s.formContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.topForm}>
                           
                        </div>
                        <div className={s.textContainer}>
                            <label>Que tipo de mascota prefieres?</label>
                                <select {...register("type", {})}>
                                    <option value="null">   </option>
                                    <option value="perro" >Perro</option>
                                    <option value="gato">Gato</option>
                                    <option value="ambos">Me gustan los 2</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>Ya has tenido Mascotas antes?</label>
                                <select {...register("haTenidoMascota")}>
                                    <option value="null">   </option>
                                    <option value="Si">Si</option>
                                    <option value="No">No</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>De que edad te gustaría adoptar?</label>
                                <select {...register("age")}>
                                    <option value="null">   </option>
                                    <option value="cachorro">Cachorro</option>
                                    <option value="joven">Joven</option>
                                    <option value="adulto">Adulto</option>
                                    <option value="adulto mayor">Adulto Mayor</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>Alguna preferencia de género?</label>
                                <select {...register("gender")}>
                                    <option value="null">   </option>
                                    <option value="macho">Macho</option>
                                    <option value="hembra">Hembra</option>
                                </select>
                        </div>
                        <div className={s.textContainer}>
                            <label>Y su pelo...cómo lo prefieres?</label>
                                <select {...register("coat")}>
                                    <option value="null">   </option>
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
                                <select {...register("size")}>
                                    <option value="null">   </option>
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
