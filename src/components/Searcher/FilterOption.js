import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import s from '../../css/FilterOption.module.css'
import { breedFilter, ageFilter, sizeFilter, genreFilter } from '../../redux/actions'

const FilterOption = ({ type = 'Raza', options = ['Prueba'], handlerFunction }) => {

  const dispatch = useDispatch()

  const onClickHandler = (e) => {
    e.preventDefault()
    switch (type) {
      case 'Raza':
        e.target.value.length && dispatch(breedFilter(e.target.value))
        break;
      case 'Edad':
        e.target.value.length && dispatch(ageFilter(e.target.value))
        break
      case 'Tamaño':
        // const size = e.target.value.split(' ')
        e.target.value.length && dispatch(sizeFilter(e.target.value.split(' ')[0]))
        break
      case 'Sexo':
        e.target.value.length && dispatch(genreFilter(e.target.value))
        break
      default:
        break;
    }
  }

  return (
    <div className={s.filterOptionBox}>
      <label htmlFor='select'>{type}</label>
      <select name='select' onChange={onClickHandler}>
        <option value=""></option>
        {
          options.map(element => {
            return <option key={`${element}`} value={element}>{element}</option>
          })
        }
      </select>
    </div>
  )
}

export default FilterOption