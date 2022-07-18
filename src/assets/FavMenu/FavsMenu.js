import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom';
import FavMiniCard from './FavMiniCard'
import { getPetFavs } from '../../redux/petsActions';
import arrow from '../../assets/icons/dropdown-arrow.svg'
import s from '../../css/FavsMenu.module.css'
import notFound from '../images/not-found.png'

const FavsMenu = () => {

  const petsFavs = useSelector(state => state.petsReducer.petsFavs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPetFavs(1))

  // }, [dispatch, petsFavs])
  }, [dispatch])


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
            petsFavs.length > 0
              ?
              petsFavs.map((e, index) => {
                let photo = e.photos[0] === undefined ? notFound : e.photos[0].option_1
                return (
                  <FavMiniCard
                    key={`fav_m${e.name}${index}`}
                    id={e.id}
                    img={photo}
                    name={e.name}
                    city={`${e.contact.address.city}, ${e.contact.address.country}`}
                    age={e.age}
                  />)
              })
              : <div className={s.empty}> <p> No tienes mascotas favoritas</p> </div>
          }
        </div>
        {
          petsFavs.length > 0 && (
            <div className={s.favsMenuLink}>
              <Link to="/favorites">Ver todos los favoritos</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FavsMenu