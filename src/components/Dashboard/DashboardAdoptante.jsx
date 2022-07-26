import React from 'react'
import s from '../../css/DashboardAdoptante.module.css';
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries, getUserInfo, patchUser, getCitiesByCountry, getDonations } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';



export default function DashboardAdoptante() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const detail = useSelector((state) => state.reducer.userDetail)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    let userDetail = localStorage.getItem('userDetail');
    userDetail = JSON.parse(userDetail)
    const { isAuthenticated } = useAuth0();

    
    useEffect(() => {
        dispatch(getUserInfo(userId, token))

        if (!userDetail.match){
            Swal.fire({
            icon: 'info',
            title: `Sabes ${detail.name}!`,
            text: 'No has hecho aún el test...Quieres hacerlo?',
            showCancelButton: true,
            confirmButtonText: 'Hacer el test',
            confirmButtonColor: '#66668F',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Navigate('/quizz')
                } 
              })
        }

    }, [])
    function handleClick(){
        return Navigate('/quizz')
    }


    return (
        <div>
            <NavBar />
            
                <div className={s.content}>
                    <h1>Mi Dashboard</h1>
                    <div className={s.dash}>
                        <div className={s.datos}>
                            <div className={s.nonSelected}>
                                <Link className={s.link} to={ isAuthenticated ? '/dashboard/auth0' : '/dashboard' }><h3>Sobre Mí</h3></Link>
                            </div>
                            <div className={s.nonSelected}>
                                <Link className={s.link} to='/dashboard/mascotas'><h3>Mis Mascotas</h3></Link>
                            </div>
                            <div className={s.selected}>
                                <Link className={s.link} to='/dashboard/adoptante'><h3>Perfil Adoptante</h3></Link>
                            </div>
                            <div className={s.nonSelected}>
                                {userDetail.role === 'fundation'?
                            <Link className={s.link} to='/dashboard/foundation'><h3>Donaciones  Recibidas</h3></Link>:
                            <Link className={s.link} to='/dashboard/donations'><h3>Donaciones  Realizadas</h3></Link>
                                }
                            </div>
                        </div>
                        {userDetail.match?
                        <div className={s.infoContainer}>
                            <h2>Mi mascota ideal</h2>
                            <div className={s.inputContainer}>
                                <div className={s.left}>
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
                                    
                                </div>
                                <div className={s.right}>
                                    <div className={s.apellido}>
                                        <h4>Tuviste / tienes mascota </h4>
                                        <p className={s.pInfo}>{userDetail.match.haTenidoMascota}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <h4>Género</h4>
                                        <p className={s.pInfo}>{userDetail.match.genre}</p>
                                    </div>
                                    <div className={s.apellido}>
                                        <h4>Tamaño</h4>
                                        <p className={s.pInfo}>{userDetail.match.size}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            {/* <Link to='/create-pet' className={s.link}>
                                <button className={s.button}>Agregar Mascota</button>
                            </Link> */}
                        </div>
                        :<div className={s.infoError}>
                            <h2>{userDetail.name} no tienes mascota ideal! ...quieres hacer el test?</h2>
                            <div >
                            <button classname={s.send} onClick={handleClick}>Ok</button>

                            </div>
                        </div>
                        }
                </div>
            </div>
            <Footer />
        </div>
    )
}
