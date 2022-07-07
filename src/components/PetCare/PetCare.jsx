import React from 'react'
import s from '../../css/PetCare.module.css'
import {ReactComponent as Huella} from '../../assets/Huella.svg'
import NavBar from '../../assets/NavBar/NavBar'

export default function PetCare() {
  return (
    <div>
        <NavBar></NavBar>
        <div className={s.content}>
            <div className={s.section1}>
                <div className={s.pic1}></div>
                <div className={s.textBox1}>
                    <p className={s.title1}>Tips de Alimentación saludable</p>
                    <p className={s.text1}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.                    
                    </p>

                </div>
            </div>
            <div className={s.section2}>
                <div className={s.textBox2}>
                    <p className={s.title2}>Gaticos entretenidos</p>
                    <p className={s.text2}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </p>
                </div>
                <div className={s.pic2}></div>
            </div>
            <div className={s.donate}>
                <div className={s.card1}>
                    <Huella className={s.cardImg1}/>
                    <p className={s.cardText1}>Recuerda que puedes apoyarlos con una pequeña donación</p>
                    <button className={s.donarButton}>DONAR</button>
                </div>
                <div className={s.cards}>
                    <div className={s.cardsImg}style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg)` }}>
                    </div>
                    <div className={s.textContainer}>
                        <p>Name</p>
                        <p>Location</p>
                        <p>Age</p>
                    </div>
                </div>
                <div className={s.cards}>
                    <div className={s.cardsImg}style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026__340.jpg)` }}>
                    </div>
                    <div className={s.textContainer}>
                        <p>Name</p>
                        <p>Location</p>
                        <p>Age</p>
                    </div>
                </div>
                <div className={s.cards}>
                    <div className={s.cardsImg}style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518__340.jpg)` }}>
                    </div>
                    <div className={s.textContainer}>
                        <p>Name</p>
                        <p>Location</p>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
