import React, { useEffect, useState } from 'react'
import HeroHome from './HeroHome'
import NavBar from '../../assets/NavBar/NavBar'
import RelatedCase from './RelatedCase'
import ArticlesCase from './ArticlesCase'
import Footer from '../../assets/Footer/Footer'
import { useDispatch } from 'react-redux/es/exports'
import { resetSearch } from '../../redux/petsActions'
import { getLocation } from '../../redux/actions'
import s from '../../css/Home.module.css'


const Home = () => {

  const dispatch =useDispatch()
  const [location, setLocation] = useState(false)
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    return () => {
      dispatch(resetSearch())
    }
  }, [dispatch])

  useEffect(() => {
    if(!userId){
      navigator.geolocation.getCurrentPosition(
        function(position){
          setLocation(
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          )
        },
        function(error){
          console.log(error);
        }
      )
    }
  }, [])

  useEffect(() => {
    if(location){
      dispatch(getLocation(location))
        .then(response => {
          setLocation(response)
          localStorage.setItem('notLoggedUserLocation',JSON.stringify(response));
        })
    }
  }, [location])
  
  

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