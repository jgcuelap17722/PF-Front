import React from 'react'
import HomeSearcher from './HomeSearcher'
import s from '../../css/HeroHome.module.css'
import img from '../../assets/images/hero-background-img.jpg'

const HeroHome = () => {
  return (
    <section className={s.sectionBox}>
      <h1>Encuentra Mascotas para Adoptar</h1>
      <h4>Guía de mascotas para adoptar y dar en adopción</h4>

      <HomeSearcher />

      <div className={s.filter}></div>
      <div className={s.imageBox}>
        <img src={img} alt="" />
      </div>
    </section>
  )
}

export default HeroHome