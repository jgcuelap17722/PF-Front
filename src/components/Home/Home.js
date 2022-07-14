import React, { useEffect } from 'react'
import HeroHome from './HeroHome'
import NavBar from '../../assets/NavBar/NavBar'
import RelatedCase from './RelatedCase'
import ArticlesCase from './ArticlesCase'
import s from '../../css/Home.module.css'
import Footer from '../../assets/Footer/Footer'
import { useDispatch } from 'react-redux/es/exports'
import { resetSearch } from '../../redux/petsActions'

const Home = () => {

  const dispatch =useDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetSearch())
    }
  }, [dispatch])

  return (
    <main className={s.homeBox}>
      <NavBar />
      <HeroHome />
      <RelatedCase />
      <ArticlesCase />
      <Footer />
    </main>
  )
}

export default Home