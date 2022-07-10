import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import SearcherFilter from './SearcherFilter'
import FiltersAmount from './FiltersAmount'
import Pagination from './Pagination'
import Card from '../../assets/Card/Card'

import { getAllPets, getDetail } from '../../redux/actions'

import s from '../../css/Search.module.css'


const Search = () => {

  const { petType } = useParams()
  const dispatch = useDispatch()
  const allPets = useSelector(state => state.petsFiltered)
  // Paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [petsPerPage, setPetsPerPage] = useState(9)
  const indexOfLastPet = currentPage * petsPerPage
  const indexOfFirstPet = indexOfLastPet - petsPerPage 
  const currentPets = allPets.slice(indexOfFirstPet, indexOfLastPet)

  const pagination = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  useEffect(() => { 
    dispatch(getAllPets())
  }, [dispatch])


  return (
    <section className={s.sectionBox}>
      <SearcherFilter petType={petType} />
      <div className={s.paginatedBox}>
      
        <FiltersAmount />
        <div className={s.cardsBox}>
          {
            currentPets && currentPets.map(e =>{
              return <Card img={e.photos[0].small} name={e.name} location={`${e.contact.address.city}, ${e.contact.address.state}`} age={e.age} cardType='search'/>
            })
          }
        </div>

        <Pagination petsPerPage={petsPerPage} allPets={allPets.length} pagination={pagination} page={currentPage}/>
      </div>

    </section>
  )
}

export default Search