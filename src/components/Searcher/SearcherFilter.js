import s from '../../css/SearcherFilter.module.css'
import FilterOption from './FilterOption'
import { filtersOptionsDogs } from '../../assets/dataMockups/filtersOptions'
import { InfoApi } from '../../assets/dataMockups/InfoApi'

const SearcherFilter = ({props}) => {
  const dogsMockup = InfoApi.filter(e => e.type === 'Dog')
  const catsMockup = InfoApi.filter(e => e.type === 'Cat')

  console.log('dogs', dogsMockup);
  console.log('cats', catsMockup);
  
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