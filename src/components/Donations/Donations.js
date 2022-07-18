import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPay } from "../../redux/actions";
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";
import NavBar from "../../assets/NavBar/NavBar";
import Footer from "../../assets/Footer/Footer";
import s from '../../css/Donations.module.css'

export default function Donations() {
    let infoFundacion = localStorage.getItem('petDetail');
    infoFundacion = JSON.parse(infoFundacion)
    let infoUser = localStorage.getItem('user');
    infoUser = JSON.parse(infoUser)
    let userId = localStorage.getItem('userId');
    userId = JSON.parse(userId)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const linkPay = useSelector((state) => state.reducer.pay)
    const navigate = useNavigate()
    useEffect(() => {

    }, [dispatch])
    const preference = {
        items: [
            {
                title: "Donación para fundacion",
                quantity: 1,
                unit_price: parseInt(value.valor),
            }
        ],
        payer: {
            name: 'name',
            surname: 'lastname',
            email: 'test_user_83636644@testuser.com',
        },
        metadata: {
            fromUser: {
                id: 1,
                country: "PER",
                typeUser: 'user'
            },
            toUser: {
                id: 2,
                country: "PER",
                typeUser: 'user'
            }
        }
    }
    function handleChange(e) {
        e.preventDefault();
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    function handleClick(e) {
        e.preventDefault();
        dispatch(postPay(preference))
    }
    const linkPago = linkPay.urlPreferentialPayment
    
    return (
        <div>
            <NavBar />
            {linkPago?.length > 0 ? window.location.replace(`${linkPago}`) :
                <div className={s.content}>

                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <ul>
                        <h2>fundacion</h2>
                    </ul>
                    <input type='number' name="valor" onChange={handleChange}></input>
                    <button onClick={handleClick}>Pagar</button>

                </div>
            }
            <Footer />
        </div>
    )
}