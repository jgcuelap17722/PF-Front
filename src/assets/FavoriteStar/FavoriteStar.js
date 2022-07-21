import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { postFavPet, deletePetFav, getPetFavs } from '../../redux/petsActions'
import favStarAvoid from '../../assets/icons/favstar-avoid.svg'
import favStarFilled from '../../assets/icons/favstar-filled.svg'
import s from '../../css/FavoriteStar.module.css'

const FavoriteStar = ({ userId , petId }) => {

  const userRef = parseInt(userId)
  const petRef = parseInt(petId)

  const [display, setDisplay] = useState(false)

  const dispatch = useDispatch()

  const clickHandler = async (e) => {
    if (display) {
      if(userId){
        setDisplay(false)
        const response = await dispatch(deletePetFav({userId: userRef, petId}))
        console.log('delete', response);
      } else{
        alert('No has iniciado sesión')
      }

    } else {
      setDisplay(true)
      const response = await dispatch(postFavPet({userId: userRef, petId}))
      dispatch(getPetFavs())
      console.log('post', response);
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