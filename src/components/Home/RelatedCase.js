import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPets } from "../../redux/petsActions"
import Card from "../../assets/Card/Card"
import SwiperCards from "../../assets/Swiper/SwiperCards"
import s from "../../css/RelatedCase.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';


const RelatedCase = () => {

  const allPets = useSelector(state => state.petsReducer.allPets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPets())
  }, [dispatch])

  const dataRelated = allPets.filter((e, index) => index < 5)
  const dataViewed = allPets.filter((e, index) => index < 2)

  return (
    <section>
      <h1 className={s.proximityTitle}>Mascotas Para Ser Adoptadas en tu Ciudad</h1>
      {/* <div className={s.relatedBox}>
          {
            dataRelated && dataRelated.map((e, index) => {
              return (
                <Card
                  key={`${e.name}${index}`}
                  img={e.photos[0].small}
                  name={e.name}
                  location={`${e.contact.address.city}, ${e.contact.address.state}`}
                  age={e.age}
                  id={e.id}
                  cardType='home' />
              )
            })
          }
      </div> */}
      <SwiperCards>
        {
          dataRelated && dataRelated.map((e, index) => {
            return (
              <SwiperSlide>
                <Card
                  key={`${e.name}${index}`}
                  img={e.photos[0].small}
                  name={e.name}
                  location={`${e.contact.address.city}, ${e.contact.address.state}`}
                  age={e.age}
                  id={e.id}
                  cardType='home' />
              </SwiperSlide>
            )
          })
        }
      </SwiperCards>
      <h1 className={s.viewedTitle} >Mascotas Vistas Recientemente</h1>
      <div className={s.relatedBox}>
        {
          dataViewed && dataViewed.map((e, index) => {
            return (
              <Card
                key={`${e.name}${index}`}
                img={e.photos[0].small}
                name={e.name}
                location={`${e.contact.address.city}, ${e.contact.address.state}`}
                age={e.age}
                id={e.id}
                cardType='home' />
            )
          })
        }
      </div>
      <div className="viewedBox"></div>
    </section>
  )
}

export default RelatedCase