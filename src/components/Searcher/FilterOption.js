import s from '../../css/FilterOption.module.css'

const FilterOption = ({ type = 'Raza', options = ['Prueba'], handlerFunction }) => {

  let onClickHandler

  const defaultHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value);
  }

  if (!handlerFunction) {
    onClickHandler = defaultHandler
  }

  return (
    <div className={s.filterOptionBox}>
      <label htmlFor={type}>{type}</label>
      <select name={type} id="" onClick={onClickHandler}>
        <option value=""></option>
        {
          options.map(e => {
            return <option value={e}>{e}</option>
          })
        }
      </select>
    </div>
  )
}

export default FilterOption