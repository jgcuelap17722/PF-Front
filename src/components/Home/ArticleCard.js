import React from 'react'
import { useNavigate } from 'react-router'
import s from '../../css/ArticleCard.module.css'

const ArticleCard = ({ img, url }) => {

  const navigate = useNavigate()

  const onClickHandler = ()=>{
    navigate(`/pet-care`) 
  }


  return (
    <div onClick={onClickHandler} className={s.articleCardBox}>
      <div className={s.imgBox}>
        <img src={img} alt="" />
      </div>
      <div className={s.textBox}>
        <h4>Artículos Sobre Adopción y Cuidado de Perros</h4>
        <h5>Aprende sobre el cuidado de tus mascotas</h5>
      </div>
      <button className={s.buttonBox} >Leer Más</button>
    </div>
  )
}

export default ArticleCard