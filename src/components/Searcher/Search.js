import s from '../../css/Search.module.css'
import SearcherFilter from './SearcherFilter'
import FiltersAmount from './FiltersAmount'
import Paginated from './Paginated'
import Card from '../../assets/Card/Card'
import { InfoApi } from '../../assets/dataMockups/InfoApi'

const Search = () => {

  const data = InfoApi.filter((e, id) => id < 9)

  return (
    <section className={s.sectionBox}>
      <SearcherFilter />
      <div className={s.paginatedBox}>
        <FiltersAmount />
        <div className={s.cardsBox}>
          {
            data && data.map(e =>{
              return <Card img={e.photos[0].small} name={e.name} location={`${e.contact.address.city}, ${e.contact.address.state}`} age={e.age} cardType='search'/>
            })
          }

        </div>
        <Paginated/>
      </div>

    </section>
  )
}

export default Search