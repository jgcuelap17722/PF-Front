import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import notFound from '../../assets/images/not-found.png'
import SearcherFilter from './SearcherFilter'
import FiltersAmount from './FiltersAmount'
import Pagination from './Pagination'
import Card from '../../assets/Card/Card'
import Spinner from '../../assets/Spinner/Spinner'
import { resetSearch } from '../../redux/petsActions'

import s from '../../css/Search.module.css'


const SearchCase = ({ petType, type }) => {

  const pets = useSelector(state => state.petsReducer.petsFiltered)

  // Paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [petsPerPage, setPetsPerPage] = useState(9)
  const indexOfLastPet = currentPage * petsPerPage
  const indexOfFirstPet = indexOfLastPet - petsPerPage
  const currentPets = pets.length > 0 ? pets.slice(indexOfFirstPet, indexOfLastPet) : []

  const dispatch = useDispatch()

  useEffect(() => {

    return () => {
      dispatch(resetSearch())
    }
  }, [dispatch])


  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className={s.sectionBox}>
      <SearcherFilter petType={petType} />
      <div className={s.paginatedBox}>

        <FiltersAmount />
        <div className={s.cardsBox}>
          {
            currentPets.length > 0
              ? currentPets.map((e, index) => {
                let photo = e.photos[0] === undefined ? notFound : e.photos[0].option_1
                return (
                  <Card
                    key={`${e.name}${index}`}
                    id={e.id}
                    img={photo}
                    name={e.name}
                    location={`${e.contact.address.city}, ${e.contact.address.country}`}
                    age={e.age}
                    isFav={e.isFavourite}
                    cardType='search' />
                )
              })
              : <Spinner message={'No hay mascotas disponibles para tu búsqueda'}/>
          }
        </div>

        <Pagination
          petsPerPage={petsPerPage}
          allPets={pets.length}
          pagination={pagination}
          page={currentPage}
        />
      </div>

    </section>
  )
}

export default SearchCase