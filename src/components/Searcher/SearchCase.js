import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import SearcherFilter from './SearcherFilter'
import FiltersAmount from './FiltersAmount'
import Pagination from './Pagination'
import Card from '../../assets/Card/Card'

import { getAllPets, typeFilter, resetSearch } from '../../redux/petsActions'

import s from '../../css/Search.module.css'
import Spinner from '../../assets/Spinner/Spinner'


const SearchCase = ({ petType, type }) => {

  const pets = useSelector(state => state.petsReducer.petsFiltered)

  // Paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [petsPerPage, setPetsPerPage] = useState(9)
  const indexOfLastPet = currentPage * petsPerPage
  const indexOfFirstPet = indexOfLastPet - petsPerPage
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet)

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
            currentPets
              ? currentPets.map((e, index) => {
                return (
                  <Card
                    key={`${e.name}${index}`}
                    id={e.id}
                    img={e.photos[0].option_1}
                    name={e.name}
                    location={`${e.contact.address.city}, ${e.contact.address.country}`}
                    age={e.age}
                    cardType='search' />
                )
              })
              : <Spinner />
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