import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import icon from '../../assets/icons/Search-Icon.svg'
import s from '../../css/HomeSearcher.module.css'


const HomeSearcher = () => {

  const [input, setInput] = useState('')
  const navigate = useNavigate()

  function handleInput (e){
    // console.log('input',e.target.value)
    setInput({
      ...input,
      name:e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    if(!input) {
      alert('Debes ingresar una ciudad')
    }else {
      navigate(`/searcher/location/` + input.name.toLowerCase()) 
    }
    
  }

  return (
    <div className={s.formBox}>
      <form>
        {/* <input className={s.pet} type="text" placeholder='Mascota'/>
        <div className={s.line}></div> */}
        <input className={s.city} type="text" placeholder='Ciudad' onChange={(e) => handleInput(e)} name='city'/>
        <button onClick={handleSubmit} className={s.button}><img className={s.icon} src={icon} alt="" /></button>
      </form>
    </div>
  )
}

export default HomeSearcher