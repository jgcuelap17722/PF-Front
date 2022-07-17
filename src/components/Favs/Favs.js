import NavBar from '../../assets/NavBar/NavBar'
import MatchTest from './MatchTest'
import FavsCase from './FavsCase'
import Footer from '../../assets/Footer/Footer'
import s from '../../css/Searcher.module.css'
import { useDispatch } from 'react-redux'
import { getPetFavs } from '../../redux/petsActions'
import { useEffect } from 'react'

const Favs = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPetFavs(1))
  }, [dispatch])

  return (
    <main className={s.searcherBox}>
      <NavBar />
      {/* <MatchTest /> */}
      <FavsCase/>
      <Footer />
    </main>
  )
}

export default Favs