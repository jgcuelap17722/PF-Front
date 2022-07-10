import NavBar from '../../assets/NavBar/NavBar'
import MatchTest from './MatchTest'
import SearchCase from './SearchCase'
import Footer from '../../assets/Footer/Footer'
import s from '../../css/Searcher.module.css'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllPets, typeFilter } from '../../redux/actions'

const Searcher = () => {

  const { petType } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPets())
  }, [dispatch])
  
  useEffect(() => {
    if(petType === 'dog'){
      dispatch(typeFilter("Dog"))
    } else{
      dispatch(typeFilter("Cat"))
    }
    
  }, [dispatch, petType])

  return (
    <main className={s.searcherBox}>
      <NavBar />
      <MatchTest />
      <SearchCase  petType={petType} />
      <Footer />
    </main>
  )
}

export default Searcher