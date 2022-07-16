import { useNavigate } from 'react-router'
import s from '../../css/FavMiniCard.module.css'


const FavMiniCard = ({ id, name, city, age, img }) => {

  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(`/pet-detail/${id}`)
  }

  return (
    <div onClick={clickHandler} className={s.favCardBox}>

      <div className={s.favCardImgBox}>
        <img src={img} alt="" href={'#'} />
      </div>

      <div className={s.textBox}>
        <span className={s.favCardTitle}>
          <h5>{name ? name : 'Name'}</h5>
        </span>
        <span className={s.favCardCity}>
          <p>{city ? city : 'City'}</p>
        </span>
        <p className={s.favCardAge}>{age ? age : 'Age'}</p>
        <button className={s.favCardDelete}>Eliminar de Favoritos</button>
      </div>

    </div>
  )
}

export default FavMiniCard