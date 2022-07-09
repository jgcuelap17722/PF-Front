import s from '../../css/SearcherFilter.module.css'
import FilterOption from './FilterOption'

const SearcherFilter = () => {
  return (
    <aside className={s.searcherFilterBox}>SearcherFilter
      <FilterOption />
    </aside>
  )
}

export default SearcherFilter