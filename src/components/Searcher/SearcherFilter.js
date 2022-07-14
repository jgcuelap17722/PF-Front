import s from '../../css/SearcherFilter.module.css'
import FilterOption from './FilterOption'
import { filtersOptionsDogs, filtersOptionsCats } from '../../constants/filterOptions/filtersOptions'
import { useState } from 'react'

const SearcherFilter = ({ petType }) => {

  // const [filtersAmount, SetFiltersAmount] = useState([])
  const filterType = petType
  let filtersByType

  // console.log('filterAmount', filtersAmount);

  if (filterType === 'dog') {
    filtersByType = filtersOptionsDogs
  } else {
    filtersByType = filtersOptionsCats
  }

  return (
    <aside className={s.searcherFilterBox}>
      {
        filtersByType.map((e, id) => {
          return (
            <FilterOption 
              key={`${e.type}${id}`} 
              type={e.type} 
              options={e.options} 
              // SetFiltersAmount={SetFiltersAmount}
              // filtersAmount={filtersAmount} 
            />)
        })
      }
    </aside>
  )
}

export default SearcherFilter