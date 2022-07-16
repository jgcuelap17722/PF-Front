import NavBar from '../../assets/NavBar/NavBar'
import MatchTest from './MatchTest'
import FavsCase from './FavsCase'
import Footer from '../../assets/Footer/Footer'
import s from '../../css/Searcher.module.css'

const Favs = () => {

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