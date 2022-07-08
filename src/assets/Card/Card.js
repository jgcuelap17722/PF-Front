import React from 'react'
import s from '../../css/Card.module.css'

const Card = ({img, name, location, age }) => {
  return (
    <div className={s.cards}>
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