import { useNavigate } from 'react-router'
import s from '../../css/Card.module.css'
import FavoriteStar from '../FavoriteStar/FavoriteStar'
import { capitalize } from '../Helpers/capitalize'

const Card = ({ img, name, location, age, cardType, id }) => {

  //CardType = home, search, care

  const navigate = useNavigate()

  const onClickHandler = ()=>{
    navigate(`/pet-detail/${id}`) 
  }
  
  return (
    <div className={cardType === 'home' ? s.cards : cardType === 'search'? s.cards2 : cardType === 'care'? s.cards3 : null} >
      <FavoriteStar id={id} img={img} name={name} location={location} age={age}/>
      <div onClick={onClickHandler} className={s.cardsImg}>
        {
            img
            ?<img src={img} alt={`${name}_img`} />
            :<div className={s.cardImgCharging}></div>
        }
      </div>
      <div onClick={onClickHandler} className={s.textContainer}>
        <p>{capitalize(name)}</p>
        <p>{capitalize(location)}</p>
        <p>{capitalize(age)}</p>
      </div>
    </div>
  )

}

export default Card