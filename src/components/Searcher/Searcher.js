import NavBar from '../../assets/NavBar/NavBar'
import MatchTest from './MatchTest'
import SearchCase from './SearchCase'
import Footer from '../../assets/Footer/Footer'
import s from '../../css/Searcher.module.css'

const Searcher = () => {
  return (
    <main className={s.searcherBox}>
      <NavBar />
      <MatchTest />
      <SearchCase /> 
      <Footer />
    </main>
  )
}

export default Searcher