import s from '../../css/SearcherFilter.module.css'
import FilterOption from './FilterOption'
import { filtersOptionsDogs } from '../../assets/dataMockups/filtersOptions'

const SearcherFilter = () => {
  return (
    <aside className={s.searcherFilterBox}>
      {/* <FilterOption type={filtersOptionsDogs[0].type} options={filtersOptionsDogs[0].options}/> */}
      {
        filtersOptionsDogs.map(e=>{
          return <FilterOption type={e.type} options={e.options}/>
        })
      }
    </aside>
  )
}

export default SearcherFilter