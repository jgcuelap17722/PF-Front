import React from 'react'
import s from '../../css/Dashboard.module.css';
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCitiesByCountry, getCountries, getUserInfo, loginUser } from '../../redux/actions';

export default function Dashboard() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.userDetail)

    useEffect(() => {
        dispatch(getUserInfo(userId, token))
        dispatch(getCountries())
    }, [dispatch])
    useEffect(() => {
        setTimeout(() => {
            dispatch(getCitiesByCountry(detail.countryId))
        }, 2000)
    }, [dispatch])

    const countryEstado = useSelector((state) => state.countries)
    let countryDetail = countryEstado?.filter(el => el.id === detail.country)

    return (
        <div>
            <NavBar />
            <div className={s.content}>
                <h1>Mi Dashboard</h1>
                <div className={s.datos}>
                    <div className={s.selected}>
                        <h3>About Me</h3>
                    </div>
                    <div className={s.nonSelected}>
                        <h3>Adopter Profile</h3>
                    </div>
                    <div className={s.nonSelected}>
                        <h3>Account Settings</h3>
                    </div>
                </div>
                <div className={s.infoContainer}>
                    <h2>Info</h2>
                    <div className={s.inputContainer}>
                        <div className={s.left}>
                            <div>
                                <h4>First Name</h4>
                                <input value={detail.name} type="text" />
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <input value={detail.phone} type="text" />
                            </div>
                            <div>
                                <h4>Country</h4>
                                <input value={countryDetail[0]?.name} type="text" />
                            </div>
                        </div>

                        <div className={s.right}>
                            <div>
                                <h4>Last Name</h4>
                                <input value={detail.lastName} type="text" />
                            </div>
                            <div id='lastInput'>
                                <h4>City</h4>

                                <input value={detail.city} type="text" />

                            </div>

                        </div>
                    </div>
                    <Link to='/create-pet' className={s.link}>
                        <button className={s.button}>Add Pet</button>
                    </Link>
                </div>

            </div>


            <Footer />
        </div>
    )
}
