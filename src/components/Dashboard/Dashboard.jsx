import React from 'react'
import s from '../../css/Dashboard.module.css';
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCountries, getUserInfo, patchUser, getCitiesByCountry } from '../../redux/actions';



//target.focus
//onblur
export default function Dashboard() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const cities = useSelector( state => state.reducer.citiesByCountry );
    const detail = useSelector((state) => state.reducer.userDetail)
    const dispatch = useDispatch()
const patch = useSelector((state)=> state.reducer.patch)
    localStorage.setItem('userDetail', JSON.stringify(detail));
    let userDetail = localStorage.getItem('userDetail');
    userDetail = JSON.parse(userDetail)

    const [value, setValue] = useState({
    })

    useEffect(() => {
        dispatch(getUserInfo(userId, token))
        dispatch(getCountries())
        
        if(value.countryId === 'ARG'){
            dispatch(getCitiesByCountry('ARG')).then(()=>{
                dispatch(patchUser(userId, value, token))
            })
		}
		if(value.countryId === 'CHL'){
            dispatch(getCitiesByCountry('CHL')).then(()=>{
                dispatch(patchUser(userId, value, token))
            })
		}
		if(value.countryId === 'COL'){
            dispatch(getCitiesByCountry('COL')).then(()=>{
                dispatch(patchUser(userId, value, token))
            })
		}
		if(value.countryId === 'ECU'){
            dispatch(getCitiesByCountry('ECU')).then(()=>{
                dispatch(patchUser(userId, value, token))
            })
		}
		if(value.countryId === 'PER'){
            dispatch(getCitiesByCountry('PER')).then(()=>{
                dispatch(patchUser(userId, value, token))
            })
		}
        
    }, [dispatch, value])

function handleValue(e){
        setValue({
        ...value,
        [e.target.name]: e.target.value
        })
}


function handleBlur(e){
e.preventDefault(e)
if(e.target.blur){
dispatch(patchUser(userId, value, token))
.then(()=>{
    dispatch(getUserInfo(userId, token))
})
.then(()=>{
    dispatch(getCitiesByCountry(detail.country))
})

}
}

function handleSelect(e){
    e.preventDefault(e)
    dispatch(patchUser(userId, value, token))
    .then(()=>{
        dispatch(getUserInfo(userId, token))
    })
    .then(()=>{
        dispatch(getCitiesByCountry(detail.country))
    })
    return cities;
    }


const countryEstado = useSelector((state) => state.reducer.countries)



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
                                <input  onChange={(e)=>handleValue(e)} onBlur={(e)=> handleBlur(e)} name="name" value={value.name? value.name : ` ${userDetail.name}`} type="text" />
                            </div>
                            <div className={s.divPhone}>
                                <h4>Phone</h4>
                                <input onChange={(e)=>handleValue(e)} onBlur={(e)=> handleBlur(e)}   name="phone" value={value.phone? value.phone : ` ${userDetail.phone ? userDetail.phone : ' '}`} type="text" />
                            </div>
                            <div>
                                <h4>Country</h4>
                                <select value={value.countryId? value.countryId: userDetail.country } name="countryId" onSelect={handleSelect}  onChange={(e) => handleValue(e)}  >
                                {/* <option value={value.countryId? value.countryId : userDetail.country}>{value.countryId? value.countryId : userDetail.country}</option> */}
								{countryEstado && countryEstado.map( c =>
									<option value={c.id}>{c.name}</option>
								)}
							</select>
                            </div>
                        </div>

                        <div className={s.right}>
                            <div>
                                <h4>Last Name</h4>
                                <input onChange={(e)=>handleValue(e)}  onBlur={(e)=> handleBlur(e)}  name='lastName' value={value.lastName? value.lastName : ` ${userDetail.lastName}`} type="text" />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <input value={userDetail.email} type="text" />
                            </div>
                            <div id='lastInput'>
                                <h4>City</h4>
                                <select value={detail.city? detail.city: userDetail.city} name="cityId" onSelect={handleSelect}  onChange={(e) => handleValue(e)} >
                                    <option value={detail.city? detail.city: userDetail.city}>{patch.cityId? patch.cityId : userDetail.city}</option>
								{cities && cities.map( c =>
									<option value={c.id}>{c.name}</option>
								)}
							</select>
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
