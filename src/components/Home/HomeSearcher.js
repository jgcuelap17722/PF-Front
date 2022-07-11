import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import icon from '../../assets/icons/Search-Icon.svg'
import s from '../../css/HomeSearcher.module.css'
import { cityFilter } from '../../redux/actions' 


const HomeSearcher = () => {

  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  function handleInput (e){
    console.log(e.target.value)
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    if(!input) {
      alert('Debes ingresar una ciudad')
    }else {
    dispatch(cityFilter(input))
    }
    
  }

  return (
    <div className={s.formBox}>
      <form>
        {/* <input className={s.pet} type="text" placeholder='Mascota'/>
        <div className={s.line}></div> */}
        <input className={s.city} type="text" placeholder='Ciudad'onChange={(e) => handleInput(e)}name='city'/>
        <button onClick={handleSubmit} className={s.button}><img className={s.icon} src={icon} alt="" /></button>
      </form>
    </div>
  )
}

export default HomeSearcher