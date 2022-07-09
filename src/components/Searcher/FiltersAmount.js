import s from '../../css/FiltersAmount.module.css'
import FilterCard from './FilterCard'

const FiltersAmount = () => {
  return (
    <div className={s.filterAmountBox}>
      <div className={s.filtersCardsBox}>
        <FilterCard />
        <FilterCard />
      </div>
      <div className={s.sortBox}>
          <label htmlFor="select">Ordenar por: </label>
          <select name="select" >
            <option value="">Nombre</option>
            {/* <option value=""></option> */}
          </select>
      </div>
    </div>
  )
}

export default FiltersAmount