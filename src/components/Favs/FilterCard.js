import s from '../../css/FilterCard.module.css'
import { resetPetOrder } from '../../redux/petsActions'
import { useDispatch } from 'react-redux/es/exports'


const FilterCard = ({type, reset}) => {

  const dispatch = useDispatch()

  const onClickHandler = (e)=>{
    dispatch(resetPetOrder(type))
  }

  return (
    <div onClick={reset && onClickHandler} className={s.filterCardBox}>
      <p>{type}</p>
      {/* <button onClick={onClickHandler}>X</button> */}
    </div>
  )
}

export default FilterCard