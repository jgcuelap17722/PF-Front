import { useEffect, useState } from 'react'
import s from '../../css/Foundations.module.css'
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import Card from '../../assets/Card/Card'
import { getAllFoundationPets, resetFoundations } from '../../redux/foundationsActions'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../assets/Spinner/Spinner.js'

export default function Foundations() {

    const pets = useSelector(state => state.foundationsReducer.allFoundationPets)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(getAllFoundationPets())

        return ()=>{
            dispatch(resetFoundations)
        }
    
      
    }, [dispatch])
    
  return (
    <div>
        <NavBar />
            {pets.length > 0 ?
            <div className={s.content}>
                <div className={s.topBar}>
                    <h1>Fundaciones</h1>
                </div>
                <div className={s.subTitle}>
                    <h2>Todas estas mascotas pertenecen a fundaciones que necesitan tu apoyo!</h2>
                </div>
                <div className={s.cardsContainer}>
                    {pets && pets?.map(({ id, photos, name, contact, age }) => {
                    return <div className={s.cardFoundation} ><Card key={id} img={photos[0].option_1} name={name} location={contact.address.city} age={age} cardType='home' id={id} /></div>
                    }) 
                    }   
                </div>
            <Footer />
            </div>
            : <Spinner/>}
    </div>
  )
}
