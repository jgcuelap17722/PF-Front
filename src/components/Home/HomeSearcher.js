import React from 'react'
import s from '../../css/HomeSearcher.module.css'


const HomeSearcher = () => {
  return (
    <div className={s.formBox}>
      <form>
        <input className={s.pet} type="text" placeholder='Mascota'/>
        <div className={s.line}></div>
        <input className={s.city} type="text" placeholder='Ciudad'/>
        {/* <input type="button" className={s.button}/> */}
      </form>
    </div>
  )
}

export default HomeSearcher