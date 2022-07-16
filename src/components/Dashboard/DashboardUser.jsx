import React from 'react'
import s from '../../css/DashboardUser.module.css';
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import { Link } from 'react-router-dom';
import { petsCardData } from '../../assets/dataMockups/petsCardData.js'


export default function Dashboard() {
    const mascotas = petsCardData;
    return (
        <div>
            <NavBar />
            <div className={s.content}>
                <h1>Mi Dashboard</h1>
                <div className={s.datos}>
                    <Link className={s.link} to='/dashboard'><div className={s.nonSelected}>
                        <h3>Sobre Mí</h3>
                    </div></Link>
                    <div className={s.selected}>
                        <h3>Mis Mascotas</h3>
                    </div>
                    <div className={s.nonSelected}>
                        <Link className={s.link} to='/dashboard/foundation'> <h3>Donaciones  Recibidas</h3></Link>
                    </div>
                </div>
                <div className={s.infoContainer}>
                    <h2>Mis Mascotas</h2>
                    <div className={s.inputContainer}>
                        <div className={s.detailsOptions1}>
                            <div>
                                <p className={s.img}>Imagen</p>
                            </div>
                            <div>
                                <p className={s.p}>Nombre</p>
                            </div>
                            <div>
                                <p className={s.p}>Tipo</p>
                            </div>
                            <div>
                                <p className={s.p}>Fecha</p>
                            </div>
                        </div>
                        {mascotas && mascotas.map((el, index) => {
                            return (
                                <Link key={index} className={s.link} to=''>
                                    <div key={index} className={index % 2 === 1 ? s.detailsOptions : s.detailsOptionsColors}>
                                        <div className={s.detailImg}>
                                            <img src={el.img} />
                                        </div>
                                        <div>
                                            <p className={s.p}>{el.name}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{el.type}</p>
                                        </div>
                                        <div>
                                            <p className={s.p}>{el.date}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
