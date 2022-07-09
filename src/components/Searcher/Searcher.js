import NavBar from '../../assets/NavBar/NavBar'
import Footer from '../../assets/Footer/Footer'
import Search from './Search'
import s from '../../css/Searcher.module.css'
import MatchTest from './MatchTest'

const Searcher = () => {
  return (
    <main className={s.searcherBox}>
      <NavBar />
      <MatchTest />
      <Search /> 
      <Footer />
    </main>
  )
}

export default Searcher