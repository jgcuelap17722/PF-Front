import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { postFavPet, deletePetFav } from '../../redux/petsActions'
import favStarAvoid from '../../assets/icons/favstar-avoid.svg'
import favStarFilled from '../../assets/icons/favstar-filled.svg'
import s from '../../css/FavoriteStar.module.css'


const FavoriteStar = ({petId, userId}) => {

  const [display, setDisplay] = useState(false)
  const dispatch = useDispatch()

  const clickHandler = (e)=>{
    if(display){
      setDisplay(false)
      dispatch(deletePetFav({userId, petId}))
    }else {
      setDisplay(true)
      dispatch(postFavPet({userId, petId}))
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