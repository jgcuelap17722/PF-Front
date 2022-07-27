import { useNavigate, useParams } from 'react-router'
import s from '../../css/FavMiniCard.module.css'
import { deletePetFav } from '../../redux/petsActions'
import { useDispatch } from 'react-redux/es/exports'

const FavMiniCard = ({ petId, name, city, age, img, userId }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const clickHandler = () => {
    navigate(`/pet-detail/${petId}`)
  }

  const deleteHandler = () => {
    dispatch(deletePetFav({ userId, petId}))
  }

  return (
    <div  className={s.favCardBox}>

      <div onClick={clickHandler} className={s.favCardImgBox}>
        <img src={img} alt="" href={'#'} />
      </div>

      <div className={s.textBox}>
        <div onClick={clickHandler}>
        <span className={s.favCardTitle}>
          <h5>{name}</h5>
        </span>
        <span className={s.favCardCity}>
          <p>{city}</p>
        </span>
        <p className={s.favCardAge}>{age}</p>
        </div>
        <button onClick={deleteHandler} className={s.favCardDelete}>Eliminar de Favoritos</button>
      </div>


    </div>
  )
}

export default FavMiniCard