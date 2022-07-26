import React, { useState, useEffect } from "react";
import s from '../../css/PetCare.module.css'
import {ReactComponent as Huella} from '../../assets/Huella.svg'
import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../assets/Card/Card.js'
import { Link } from "react-router-dom";
import { getAllPets, getDetail, resetPetDetail } from "../../redux/petsActions";
import { useParams } from "react-router-dom";


export default function PetCare() {

    const allPets = useSelector((state) => state.petsReducer.allPets)
    const estado = useSelector((state) => state.petsReducer.petDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(getAllPets());

    }, [dispatch])

  return (
    <div>
        <NavBar></NavBar>
        <div className={s.content}>
            <div className={s.section1}>
                <div className={s.pic1}></div>
                <div className={s.textBox1}>
                    <p className={s.title1}>Tips de Alimentación saludable</p>
                    <p className={s.text1}>
                    Mantener una alimentación saludable es una tarea difícil para muchas personas. ¡Es necesario tener disciplina y control para evitar los excesos que perjudican nuestra salud! Al contrario de nosotros humanos, los animales no tienen la percepción que golosinas en demasía hacen mal, pueden generar varios problemas de salud y ¡hasta la muerte! Eso asusta, ¿no? Por lo tanto, cabe a nosotros, sus amigos y guardianes, la tarea de proveer alimentos saludables y una dieta equilibrada                 
                    </p>

                </div>
            </div>
            <div className={s.section2}>
                <div className={s.textBox2}>
                    <p className={s.title2}>Gaticos entretenidos</p>
                    <p className={s.text2}>
                    A todos los gatitos les encantan los juguetes eléctricos en movimiento, teniendo la posibilidad de atraparlos y arañarlos para mantener sus garras sanas. Incluso mejor, puedes convertir tu casa en un patio de recreo gatuno regalando a tu minino un árbol para gatos; la combinación perfecta entre postes para arañar, juguetes que cazar, plataformas, y huecos donde poder esconderse, donde tu amigo felino puede moverse con libertad para escabullirse y aparecer en otro agujero del árbol.
                    </p>
                </div>
                <div className={s.pic2}></div>
            </div>
            <div className={s.donate}>
                <div className={s.card1}>
                    <Huella className={s.cardImg1}/>
                    <p className={s.cardText1}>Recuerda que puedes apoyarlos con una pequeña donación</p>
                    <Link to='/foundations'>
                        <button className={s.donarButton}>DONAR</button>
                    </Link>
                </div>
                <div className={s.relatedBox}>
                  {
                    allPets && allPets.slice(0,3).map(({ id, photos, name, contact, age }) => {
                      return <Card key={id} img={photos[0].option_1} name={name} location={contact.address.city} age={age} cardType='home' id={id} />
                    })
                  }
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
