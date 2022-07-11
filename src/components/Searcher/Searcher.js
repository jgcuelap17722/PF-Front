import NavBar from '../../assets/NavBar/NavBar'
import MatchTest from './MatchTest'
import SearchCase from './SearchCase'
import Footer from '../../assets/Footer/Footer'
import s from '../../css/Searcher.module.css'
import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllPets, typeFilter, cityFilter, resetSearch } from '../../redux/actions'

const Searcher = () => {

  // const { type, case } = useParams();
  const { type, item } = useParams();
  const navigate = useNavigate()
  // console.log(type, item);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPets())
  }, [dispatch])
  
  useEffect(() => {
    return () => {
      // resetSearch()
    }
  }, [type])

  useEffect(() => {
    if (type === 'pet') {
      if(item === 'dog'){
        dispatch(typeFilter("Dog"))
      } else if (item === 'cat'){
        dispatch(typeFilter("Cat"))
      } else if(item !== 'dog' && item !=='cat'){
        navigate('/')
      }
    }
    if(type === 'location'){
      dispatch(cityFilter({city:item}))
    }
  }, [dispatch, navigate, type, item])

  return (
    <main className={s.searcherBox}>
      <NavBar />
      <MatchTest />
      <SearchCase  petType={item} type={type} />
      <Footer />
    </main>
  )
}

export default Searcher