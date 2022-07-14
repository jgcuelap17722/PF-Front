import React from 'react'
import { useNavigate } from 'react-router'
import s from '../../css/Filter.module.css'

const Filter = ({icon, type }) => {

  const navigate = useNavigate()

  const onClickHandler = ()=>{
    if(type === 'PERROS'){
      navigate(`/searcher/pet/dog`) 
    } else if(type === 'GATOS'){
      navigate(`/searcher/pet/cat`) 
    }
  }
  return (
    <div className={s.filterBox} onClick={onClickHandler}>
      <div className={s.filterIcon}><img className={s.filterIcon} src={icon} alt="" /> </div>
      {
        type === 'OTROS ANIMALES'
          ? <p className={s.animals}>{type}</p>
          : <p className={s.others}>{type}</p>
      }
    </div>
  )
}

export default Filter