import s from '../../css/FiltersAmount.module.css'
import FilterCard from './FilterCard'
import { useSelector } from 'react-redux/es/exports'
import { useEffect, useState } from 'react'

const FiltersAmount = () => {
  const active = useSelector(state => state.filterActive)

  return (
    <div className={s.filterAmountBox}>
      <div className={s.filtersCardsBox}>
        {
          active && active.map((e, index)=>{
            return <FilterCard key={`id_${index}${e}`} type={e}/>
          })
        }
  
      </div>
      {/* <div className={s.sortBox}>
          <label htmlFor="select">Ordenar por: </label>
          <select name="select" >
            <option value=""></option>
            <option value="">Nombre</option>
          </select>
      </div> */}
    </div>
  )
}

export default FiltersAmount