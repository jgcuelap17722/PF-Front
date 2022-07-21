import s from '../../css/FiltersAmount.module.css'
import FilterCard from './FilterCard'
import { useSelector } from 'react-redux/es/exports'

const FiltersAmount = () => {
  const active = useSelector(state => state.petsReducer.filterDisplayed)

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
