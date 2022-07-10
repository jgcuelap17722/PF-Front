import s from '../../css/FiltersAmount.module.css'
import FilterCard from './FilterCard'
import { useSelector } from 'react-redux/es/exports'
import { useState } from 'react'

const FiltersAmount = () => {
  const active = useSelector(state => state.filterActive)
  // const [filterAct, setFilterAct] = useState(true)

  return (
    <div className={s.filterAmountBox}>
      <div className={s.filtersCardsBox}>
        {
          active.map(e=>{
            return <FilterCard type={e}/>
          })
        }
  
      </div>
      <div className={s.sortBox}>
          <label htmlFor="select">Ordenar por: </label>
          <select name="select" >
            <option value=""></option>
            <option value="">Nombre</option>
          </select>
      </div>
    </div>
  )
}

export default FiltersAmount