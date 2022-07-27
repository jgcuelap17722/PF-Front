import FavoriteStar from '../FavoriteStar/FavoriteStar'
import s from '../../css/FavoriteBtn.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPetFavs } from '../../redux/petsActions'


const FavoriteBtn = ({ userId, petId }) => {

  const [isFav, setIsFav] = useState(false)
  const [clickFav, setClickFav] = useState(false)
  const petsFavs = useSelector(state => state.petsReducer.petDetailFav)

  const dispatch = useDispatch()

  useEffect(() => {
    if(userId){
      if(petsFavs.length > 0){
        setIsFav(true)
      }else{
        setIsFav(false)
      }
    }
  }, [dispatch, petsFavs])

  const handlerClick = () => {
    if (clickFav) {
      setClickFav(false)
    }else(
      setClickFav(true)
    )
  }


  return (
    <button onClick={handlerClick} className={s.buttonFavorite}>
      Favoritos
      <FavoriteStar
        petId={petId}
        userId={userId}
        isFav={isFav}
        setFav={clickFav}
        btn
      />
    </button>
  )
}

export default FavoriteBtn