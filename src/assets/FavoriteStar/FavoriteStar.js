import { useState } from 'react'
import favStarAvoid from '../../assets/icons/favstar-avoid.svg'
import favStarFilled from '../../assets/icons/favstar-filled.svg'
import s from '../../css/FavoriteStar.module.css'

const FavoriteStar = ({ id }) => {

  const [display, setDisplay] = useState(false)

  const clickHandler = (e)=>{
    if(display){
      setDisplay(false)
      //Action Delete
    }else {
      setDisplay(true)
      //Action Delete
    }
  }

  return (
    <div className={s.favoriteStarBox} onClick={clickHandler}>
      {
        display === false
          ? <img src={favStarAvoid} alt="" />
          : <img src={favStarFilled} alt="" />
      }
    </div>
  )
}

export default FavoriteStar