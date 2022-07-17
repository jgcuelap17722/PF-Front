import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom';
import FavMiniCard from './FavMiniCard'
import Spinner from '../Spinner/Spinner';
import { getPetFavs } from '../../redux/petsActions';
import arrow from '../../assets/icons/dropdown-arrow.svg'
import s from '../../css/FavsMenu.module.css'

const FavsMenu = () => {

  const petsFavs = useSelector(state => state.petsReducer.petsFavs)
  // const petsFavs = []
  // console.log('favpets', petsFavs);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPetFavs(1))

  }, [dispatch, petsFavs])


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
              petsFavs.map(el => {
                return <FavMiniCard key={`key_${el.id}`} id={el.id} img={el.photos[0]} name={el.name} city={el.city} age={el.age} />
              })
              : <Spinner />
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