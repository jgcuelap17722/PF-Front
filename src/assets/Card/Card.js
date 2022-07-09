import React from 'react'
import s from '../../css/Card.module.css'

const Card = ({ img, name, location, age, cardType }) => {

  // type: home, searcher, care
  
  return (
    <div className={cardType === 'home' ? s.cards : cardType === 'search'? s.cards2 : cardType === 'care'? s.cards3 : null} >
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