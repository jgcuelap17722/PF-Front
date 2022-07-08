import Card from "../../assets/Card/Card"
import { petsCardData } from "../../assets/dataMockups/petsCardData"
import s from "../../css/RelatedCase.module.css"

const RelatedCase = () => {

  const dataRelated = petsCardData.filter(e => e.id < 6)
  const dataViewed = petsCardData.filter(e => e.id < 3)

  return (
    <section>
      <h1 className={s.proximityTitle}>Mascotas Para Ser Adoptadas en tu Ciudad</h1>
      <div className={s.relatedBox}>
        {
          dataRelated && dataRelated.map(({id, img, name, location, age}) =>{
            return <Card key={id} img={img} name={name} location={location} age={age} />
          })
        }
      </div>
      <h1 className={s.viewedTitle} >Mascotas Vistas Recientemente</h1>
      <div className={s.relatedBox}>
        {
          dataViewed && dataViewed.map(({id, img, name, location, age}) =>{
            return <Card key={id} img={img} name={name} location={location} age={age} />
          })
        }
      </div>
      <div className="viewedBox"></div>
    </section>
  )
}

export default RelatedCase