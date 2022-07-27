import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { postFavPet, deletePetFav, getPetFavs } from '../../redux/petsActions'
import favStarAvoid from '../../assets/icons/favstar-avoid.svg'
import favStarFilled from '../../assets/icons/favstar-filled.svg'
import s from '../../css/FavoriteStar.module.css'

const FavoriteStar = ({ userId , petId, isFav, btn, setFav }) => {

  const userRef = parseInt(userId)
  const petRef = parseInt(petId)

  const [display, setDisplay] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isFav) {
      setDisplay(true)
    }
    if(setFav){
      clickHandler()
    }
  }, [isFav, setFav])
  

  const clickHandler = async (e) => {
    if(userId){
      if (display) {
        if(userId){
          setDisplay(false)
          const response = await dispatch(deletePetFav({userId: userRef, petId}))
        } 
      } else {
        setDisplay(true)
        const response = await dispatch(postFavPet({userId: userRef, petId}))
        dispatch(getPetFavs())
      }
    }else{
      alert('No has iniciado sesión')
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