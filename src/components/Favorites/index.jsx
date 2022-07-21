import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../../assets/Footer/Footer'
import NavBar from '../../assets/NavBar/NavBar'
import FavsCase from './FavCase'
import { getPetFavs } from '../../redux/petsActions'
import s from '../../css/Favorites.module.css'

export default function Favorites() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPetFavs(1))
  }, [dispatch])


  return (
    <div>
      <NavBar />
      <FavsCase/>
      <Footer />
    </div>
  )
}
