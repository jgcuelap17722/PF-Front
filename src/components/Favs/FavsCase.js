import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import SearcherFilter from './SearcherFilter'
import FiltersAmount from './FiltersAmount'
import Pagination from './Pagination'
import Card from '../../assets/Card/Card'

import { resetSearch } from '../../redux/petsActions'

import s from '../../css/Search.module.css'


const FavsCase = ({ petType, type }) => {

  const petsFav = useSelector(state => state.petsReducer.petsFavs)

  // Paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [petsPerPage, setPetsPerPage] = useState(9)
  const indexOfLastPet = currentPage * petsPerPage
  const indexOfFirstPet = indexOfLastPet - petsPerPage
  const currentPetsF = petsFav.slice(indexOfFirstPet, indexOfLastPet)

  const dispatch = useDispatch()
  
  console.log(('favs en page', petsFav));


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
            currentPetsF && currentPetsF.map((e, index) => {
              return (
                <Card
                  key={`${e.name}${index}`}
                  id = {e.id}
                  img={e.photos[0].small}
                  name={e.name}
                  location={`${e.contact.address.city}, ${e.contact.address.state}`}
                  age={e.age}
                  cardType='search' />
              )
            })
          }
        </div>

        <Pagination
          petsPerPage={petsPerPage}
          allPets={petsFav.length}
          pagination={pagination}
          page={currentPage}
        />
      </div>

    </section>
  )
}

export default FavsCase