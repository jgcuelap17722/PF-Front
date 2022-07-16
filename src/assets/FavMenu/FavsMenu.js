import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import FavMiniCard from './FavMiniCard'
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/dropdown-arrow.svg'
import s from '../../css/FavsMenu.module.css'

const FavsMenu = () => {

  const petsFavs = useSelector(state => state.petsReducer.petsFavs)
  console.log('favpets', petsFavs);

  return (
    <div className={s.favsManuBox}>
      <div className={s.linkBox}>
        <Link to={'#'} >Favoritos</Link>
        <img className={s.arrowIcon} src={arrow} alt="" />
      </div>

      <div className={s.favsMenuList}>
        <div className={s.favsMenuListTitle}>
          <p>Favoritos</p>
        </div>
        <div className={s.listBox}>
          {
            petsFavs && petsFavs.map(el => {
              return <FavMiniCard key={`key_${el.id}`} id={el.id} img={el.photos[0].small} name={el.name} city={el.city} age={el.age} />
            })
          }
        </div>
        <div className={s.favsMenuLink}>
          <Link to="/favs">Ver todos los favoritos</Link>
        </div>
      </div>
    </div>
  )
}

export default FavsMenu