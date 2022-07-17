import s from '../../css/SearcherFilter.module.css'
import FilterOption from './FilterOption'
import { filtersOptionsDogs, filtersOptionsCats } from '../../constants/filterOptions/spanishFilterOptions'

const SearcherFilter = ({ petType }) => {

  const filterType = petType
  let filtersByType

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