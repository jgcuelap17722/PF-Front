import React from 'react'
import HeroHome from './HeroHome'
import NavBar from '../../assets/NavBar/NavBar'
import RelatedCase from './RelatedCase'
import ArticlesCase from './ArticlesCase'
import s from '../../css/Home.module.css'
import Footer from '../../assets/Footer/Footer'

const Home = () => {
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