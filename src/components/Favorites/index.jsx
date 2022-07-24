import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../../assets/Footer/Footer'
import NavBar from '../../assets/NavBar/NavBar'
import FavsCase from './FavCase'
import { searchInFavs } from '../../redux/petsActions'
import s from '../../css/Favorites.module.css'

export default function Favorites() {

  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchInFavs(userId))
  }, [dispatch])


  return (
    <div>
      <NavBar />
      <FavsCase isFav={true}/>
      <Footer />
    </div>
  )
}
