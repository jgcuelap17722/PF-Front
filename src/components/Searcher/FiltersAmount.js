import s from '../../css/FiltersAmount.module.css'
import FilterCard from './FilterCard'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useEffect } from 'react'

const FiltersAmount = () => {
  const active = useSelector(state => state.petsReducer.filterActive)

  return (
    <>
      <div className={s.filterAmountBox}>
        <p>Filtros activos: </p>
        <div className={s.filtersCardsBox}>
          {
            active && active.map((e, index) => {
              return <FilterCard key={`id_${index}${e}`} type={e} />
            })
          }
        </div>
        {active.length > 0 && <FilterCard type='Borrar Filtros' reset={true} />}
      </div>
    </>


  )
}

export default FiltersAmount