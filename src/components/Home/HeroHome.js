import React from 'react'
import HomeSearcher from './HomeSearcher'
import Filter from './Filter.js'
import { filtersInfo } from '../../assets/icons/filtersInfo'
import s from '../../css/HeroHome.module.css'
import img from '../../assets/images/hero-background-img.jpg'

const HeroHome = () => {


  return (
    <section className={s.sectionBox}>
      <h1>Encuentra Mascotas para Adoptar</h1>
      <h4>Guía de mascotas para adoptar y dar en adopción</h4>

      <HomeSearcher />

      <div className={s.imgFilter}></div>
      <div className={s.imageBox}>
        <img src={img} alt="" />
      </div>

      <div className={s.filtersBox}>
        {
          filtersInfo && filtersInfo.map(({ icon, type  }, index) => {
            return <Filter icon={icon} type={type} key={`key${index}`} />
          })
        }
      </div>

      {/* <div className={s.sponsorBox}> */}
        <h1 className={s.sponsor}>Apadrina Mascotas</h1>
        <h4 className={s.sponsorBanner}>También puedes apadrinar una mascota</h4>
      {/* </div> */}


    </section>
  )
}

export default HeroHome