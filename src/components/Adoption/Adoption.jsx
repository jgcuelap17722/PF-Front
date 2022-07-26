import React from 'react'
import s from '../../css/Adoption.module.css';
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { adoptionStart, getUserInfo, resetAdoptionStart} from '../../redux/actions';


export default function Adoption() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    let petDetail = localStorage.getItem('petDetail')
    petDetail = JSON.parse(petDetail)
    const detail = useSelector((state) => state.reducer.userDetail)
    const adoption = useSelector((state) => state.reducer.adoptionStart)
    localStorage.setItem('userDetail', JSON.stringify(detail));
    let userDetail = localStorage.getItem('userDetail');
    userDetail = JSON.parse(userDetail)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [det, setDet] = useState({detail})

    
    useEffect(() => {

        if(token){
            dispatch(getUserInfo(userId, token));
            localStorage.setItem('userDetail', JSON.stringify(detail));
        }
        if(!token){
            Swal.fire({
                icon: 'info',
                title: `Primero debes iniciar sesión o registrarte!`,
                text: 'No puedes iniciar el proceso de adopción si no tienes una cuenta con nosotros',
                showDenyButton: true,
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
        
        return (() => {
            dispatch(resetAdoptionStart())
        })
        

    }, [])

    useEffect(() => {
        if(adoption?.message){
            Swal.fire({
                        icon: 'success',
                        title: 'Hemos enviado tu solicitud',
                        showConfirmButton: false,
                        timer: 3500
                    })
            .then(()=> {
                return Navigate('/')
            })
        }
        
    }, [adoption])
    
    function handleClick(e){
        e.preventDefault();
        return Navigate('/quizz')
    }
    function handleSend(e){
        e.preventDefault();
        if(token){
            dispatch(adoptionStart(petDetail.id, userId, token))

        }
            
        
    }



    return (
        <div>
            <NavBar />
            
                <div className={s.content}>
                    <h1>La futura mascota para {userDetail?.name}!</h1>
                    <div className={s.dash}>
                        <div className={s.top}>
                            <div className={s.topLeft}>
                                <h1>{petDetail?.name}</h1>
                            </div>
                            <div className={s.topRight}>
                                <div className={s.petImg}>
                                    <img src={petDetail.photos[0].option_1} alt="Imagen" />
                                </div>
                            </div>
                            
                        </div>
                        {userDetail.match?
                        <div className={s.infoContainer}>
                            <div className={s.title}>
                           
                           
                            </div>
                            <div className={s.inputContainer}>
                                <div className={s.left}>
                                <h2>Tu mascota ideal debería ser:</h2>
                                    <div className={s.name}>
                                        <h4>Tipo de mascota</h4>
                                        <p className={s.pInfo}>{userDetail.match.type}</p>
                                      
                                    </div>
                                    <div className={s.name}>
                                        <h4>Edad deseada</h4>
                                        <p className={s.pInfo}>{userDetail.match.age}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>Tipo de pelo</h4>
                                        <p className={s.pInfo}>{userDetail.match.coat}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>Género</h4>
                                        <p className={s.pInfo}>{userDetail.match.genre}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>Tamaño</h4>
                                        <p className={s.pInfo}>{userDetail.match.size}</p>
                                    </div>
                                    
                                </div>
                                <div className={s.right}>
                                <h2>{petDetail.name} cumple?:</h2>
                                    <div className={s.apellido}>
                                        <p className={s.pInfo}>{userDetail.match.type === petDetail.type? '✔' : '✖'}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <p className={s.pInfo}>{userDetail.match.age === petDetail.age? '✔' : '✖'}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <p className={s.pInfo}>{userDetail.match.coat === petDetail.coat? '✔' : '✖'}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <p className={s.pInfo}>{userDetail.match.genre === petDetail.gender? '✔' : '✖'}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <p className={s.pInfo}>{userDetail.match.size === petDetail.size? '✔' : '✖'}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        :<div className={s.infoError}>
                            <div className={s.errorTop}>
                                <h2>{userDetail.name} no tienes mascota ideal! ...quieres hacer el test para saber si {petDetail.name} puede ser una buena mascota para tí?</h2>
                                <div classname={s.send} >
                                    <button  onClick={handleClick}>Ok</button>
                                </div>
                            </div>
                            
                        </div>
                        }
                        <div className={s.bottom}>
                            <h2>La información que se va a compartir con el dueño de</h2>
                            <h3>{petDetail.name}:</h3>
                        </div>
                            <div className={s.userInfo}>
                                <div className={s.userInfoText}>
                                    <div className={s.name}>
                                        <h4>Nombre:</h4>
                                        <p className={s.pInfo}>{userDetail.name}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>Apellido:</h4>
                                        <p className={s.pInfo}>{userDetail.lastName}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>Email:</h4>
                                        <p className={s.pInfo}>{userDetail.email}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>País:</h4>
                                        <p className={s.pInfo}>{userDetail.country}</p>
                                    </div>
                                    <div className={s.name}>
                                        <h4>City:</h4>
                                        <p className={s.pInfo}>{userDetail.city}</p>
                                    </div>
                                    <button className={s.enviar} onClick={handleSend}>Enviar solicitud</button>
                                </div>      
                            </div>
                        
                </div>
            </div>
            <Footer />
        </div>
    )
}
