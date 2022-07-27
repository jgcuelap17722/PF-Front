import React from 'react'
import s from '../../css/DashboardUserDonations.module.css';
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Dashboard() {
    let userDetail = localStorage.getItem('userDetail');
    userDetail = JSON.parse(userDetail)
    let donations = localStorage.getItem('donations');
    donations = JSON.parse(donations)
    let userId = localStorage.getItem('userId');
    let donationsFilter = donations.filter(el => el.fromUserId == userId )
    
    
    return (
        <div>
            <NavBar />
            <div className={s.content}>
                <h1>Mi Dashboard</h1>
                <div className={s.dash}>
                <div className={s.datos}>
                    <div className={s.nonSelected}>
                    <Link className={s.link} to='/dashboard'><h3>Sobre Mí</h3></Link>
                    </div>
                    <div className={s.nonSelected}>
                        <Link to='/dashboard/mascotas' className={s.link}> <h3>Mis Mascotas</h3></Link>
                    </div>
                    {userDetail.role === 'user'?
                        <div className={s.nonSelected}>
                            <Link className={s.link} to='/dashboard/adoptante'><h3>Perfil Adoptante</h3></Link>
                        </div>
                        :null}
                    <div className={s.selected}>
                        <h3>Donaciones  Realizadas</h3>
                    </div>
                </div>
                <div className={s.infoContainer}>
                    <h2>Donaciones  Realizadas</h2>
                    <div className={s.inputContainer}>
                        <div className={s.detailsOptions1}>
                            <div>
                                <p className={s.p}>Fecha</p>
                            </div>
                            <div>
                                <p className={s.p}>Id</p>
                            </div>
                            <div>
                                <p className={s.p}>Estado</p>
                            </div>
                            <div>
                                <p className={s.p}>Monto</p>
                            </div>
                        </div>
                        {donationsFilter.length >= 1 ? donationsFilter.map((el, index) => {
                            return (
                                    <div key={index} className={index % 2 === 1 ? s.detailsOptions : s.detailsOptionsColors}>
                                        <div>
                                            <p className={s.p}>{el.date.split('T')[0]}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{el.toUserId}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{el.status}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{`$${el.total_amount}`}</p>
                                        </div>
                                    </div>
                            )
                        }):
                        null}
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
