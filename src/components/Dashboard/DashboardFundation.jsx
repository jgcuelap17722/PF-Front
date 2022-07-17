import React from 'react'
import s from '../../css/DashboardFundation.module.css';
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import { Link } from 'react-router-dom';
import { Donaciones } from '../../assets/dataMockups/Donaciones.js'

export default function Dashboard() {
const donaciones = Donaciones ;
    return (
        <div>
            <NavBar />
            <div className={s.content}>
                <h1>Mi Dashboard</h1>
                <div className={s.datos}>
                    <div className={s.nonSelected}>
                    <Link className={s.link} to='/dashboard'><h3>Sobre Mí</h3></Link>
                    </div>
                    <div className={s.nonSelected}>
                        <Link to='/dashboard/mascotas' className={s.link}> <h3>Mis Mascotas</h3></Link>
                    </div>
                    <div className={s.selected}>
                        <h3>Donaciones  Recibidas</h3>
                    </div>
                </div>
                <div className={s.infoContainer}>
                    <h2>Donaciones  Recibidas</h2>
                    <div className={s.inputContainer}>
                        <div className={s.detailsOptions1}>
                            <div>
                                <p className={s.p}>Fecha</p>
                            </div>
                            <div>
                                <p className={s.p}>Id</p>
                            </div>
                            <div>
                                <p className={s.p}>Nombre</p>
                            </div>
                            <div>
                                <p className={s.p}>Monto</p>
                            </div>
                        </div>
                        {donaciones && donaciones.map((el, index) => {
                            return (
                                    <div key={index} className={index % 2 === 1 ? s.detailsOptions : s.detailsOptionsColors}>
                                        <div>
                                            <p className={s.p}>{el.date}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{el.idUser}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{el.name}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{`$${el.monto}`}</p>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}