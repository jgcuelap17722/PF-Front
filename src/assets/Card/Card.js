import { useNavigate } from 'react-router'
import s from '../../css/Card.module.css'

const Card = ({ img, name, location, age, cardType, id = 1 }) => {

  //CardType = home, search, care

  const navigate = useNavigate()

  const onClickHandler = ()=>{
    navigate(`/pet-detail/${id}`) 
  }
  
  return (
    <div onClick={onClickHandler} className={cardType === 'home' ? s.cards : cardType === 'search'? s.cards2 : cardType === 'care'? s.cards3 : null} >
      <div className={s.cardsImg}>
        <img src={img} alt={`${name}_img`} />
      </div>
      <div className={s.textContainer}>
        <p>{name}</p>
        <p>{location}</p>
        <p>{age}</p>
      </div>
    </div>
  )

}

export default Card