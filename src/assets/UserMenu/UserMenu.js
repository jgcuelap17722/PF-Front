import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom';
import FavMiniCard from '../FavMenu/FavMiniCard'
import { getPetFavs } from '../../redux/petsActions';
import arrow from '../../assets/icons/dropdown-arrow.svg'
import s from '../../css/UserMenu.module.css'
import notFound from '../images/not-found.png'
import userDefault from '../images/userDefault.jpg'

const UserMenu = ({ userId, name = 'UsuarioTest', photo = userDefault, lastName }) => {

  const petsFavs = useSelector(state => state.petsReducer.petsFavs)
  const token = localStorage.getItem('token');

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPetFavs(userId))

    // }, [dispatch, petsFavs])
  }, [dispatch])


  return (
    <div className={s.userManuBox}>
      <div className={s.linkBox}>
        <div className={s.userImgBox}>
          <img src={photo} alt="" />
        </div>
        <Link to={'#'} >{name} {lastName}</Link>
        <img className={s.arrowIcon} src={arrow} alt="" />
      </div>

      <div className={s.favsMenuList}>
        <div className={s.favsMenuListTitle}>
          <p>Hola {name}</p>
        </div>
        <div className={s.listBox}>

          <div className={s.userOptions}>
            <Link to={'/dashboard'}>Mi Perfil</Link>
          </div>
          <div className={s.userOptions}>
            <Link to={'/dashboard'}>Dar en Adopción una Mascota</Link>
          </div>
          <div className={s.userOptions}>
            <Link to={'/login'}>Cerrar Sesión</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu