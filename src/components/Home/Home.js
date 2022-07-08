import React from 'react'
import HeroHome from './HeroHome'
import NavBar from '../../assets/NavBar/NavBar'
import RelatedCase from './RelatedCase'
import ArticlesCase from './ArticlesCase'
import s from '../../css/Home.module.css'

const Home = () => {
  return (
    <main>
      <NavBar />
      <HeroHome />
      <RelatedCase />
      <ArticlesCase />
    </main>
  )
}

export default Home