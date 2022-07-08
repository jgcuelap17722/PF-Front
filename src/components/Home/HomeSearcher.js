import React from 'react'
import icon from '../../assets/icons/Search-Icon.svg'
import s from '../../css/HomeSearcher.module.css'


const HomeSearcher = () => {
  return (
    <div className={s.formBox}>
      <form>
        <input className={s.pet} type="text" placeholder='Mascota'/>
        <div className={s.line}></div>
        <input className={s.city} type="text" placeholder='Ciudad'/>
        <button className={s.button}><img className={s.icon} src={icon} alt="" /></button>
      </form>
    </div>
  )
}

export default HomeSearcher