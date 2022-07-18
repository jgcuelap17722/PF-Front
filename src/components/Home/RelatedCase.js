import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPets } from "../../redux/petsActions"
import { SwiperSlide } from 'swiper/react';
import SwiperCards from "../../assets/Swiper/SwiperCards"
import Card from "../../assets/Card/Card"
import s from "../../css/RelatedCase.module.css"


const RelatedCase = () => {

  const allPets = useSelector(state => state.petsReducer.allPets)
  const dispatch = useDispatch()

  let user = localStorage.getItem('user');
  user = JSON.parse(user);

  useEffect(() => {
    dispatch(getAllPets())
  }, [dispatch])

  const dataRelated = allPets.filter((e, index) => index < 5)
  const dataViewed = allPets.filter((e, index) => index < 2)

  return (
    <section>
      <h1 className={s.proximityTitle}>Mascotas Para Ser Adoptadas en tu Ciudad</h1>
      <SwiperCards>
        {
          dataRelated && dataRelated.map((e, index) => {
            return (
              <SwiperSlide>
                <Card
                  key={`related${e.name}${index}`}
                  img={e.photos[0].option_1}
                  name={e.name}
                  location={`${e.contact.address.city}, ${e.contact.address.country}`}
                  age={e.age}
                  id={e.id}
                  cardType='home'
                  userId={user.user.id} />
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
                key={`vistos_${e.name}${index}`}
                img={e.photos[0].option_1}
                name={e.name}
                location={`${e.contact.address.city}, ${e.contact.address.country}`}
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