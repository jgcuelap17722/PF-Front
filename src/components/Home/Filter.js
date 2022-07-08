import React from 'react'
import s from '../../css/Filter.module.css'

const Filter = ({icon, type, handlerFunction = ()=>{}}) => {


  return (
    <div className={s.filterBox} onClick={handlerFunction()}>
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