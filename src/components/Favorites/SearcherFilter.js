import s from '../../css/SearcherFilter.module.css'
import FilterOption from './FilterOption'
import { filtersOptionsFavs } from '../../constants/filterOptions/spanishFilterOption'
import { useState } from 'react'

const SearcherFilter = ({ petType }) => {

  // const [filterType, setFilterType] = useState({})

  // console.log('objeto', filterType);


  return (
    <aside className={s.searcherFilterBox}>
      {
        filtersOptionsFavs.map((e, id) => {
          return (
            <FilterOption 
              key={`${e.type}${id}`} 
              type={e.type} 
              options={e.options}
              // setFilterType={setFilterType}
              // filterType={filterType}
            />)
        })
      }
    </aside>
  )
}

export default SearcherFilter