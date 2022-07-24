import { useEffect } from 'react';
import { useNavigate } from 'react-router'
import s from '../../css/Card.module.css'
import FavoriteStar from '../FavoriteStar/FavoriteStar'

const Card = ({ img, name, location, age, cardType, id, isFav }) => {

  const userId = localStorage.getItem('userId');
  const navigate = useNavigate()
 
  const onClickHandler = ()=>{
    navigate(`/pet-detail/${id}`) 
  }
  
  return (
    <div className={cardType === 'home' ? s.cards : cardType === 'search'? s.cards2 : cardType === 'care'? s.cards3 : null} >
      <FavoriteStar petId={id} userId={userId} isFav={isFav}/>
      <div onClick={onClickHandler} className={s.cardsImg}>
        {
            img
            ?<img src={img} alt={`${name}_img`} />
            :<div className={s.cardImgCharging}></div>
        }
      </div>
      <div onClick={onClickHandler} className={s.textContainer}>
        <p>{name}</p>
        <p>{location}</p>
        <p>{age}</p>
      </div>
    </div>
  )

}

export default Card