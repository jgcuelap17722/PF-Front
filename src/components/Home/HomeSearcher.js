import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import icon from '../../assets/icons/Search-Icon.svg'
import s from '../../css/HomeSearcher.module.css'


const HomeSearcher = () => {

  const [input, setInput] = useState({})
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId');
  const notLoggedUserLocation = localStorage.getItem('notLoggedUserLocation')
  const position = userId ? false :  JSON.parse(notLoggedUserLocation)


  function handleInputCity(e) {
    setInput({
      ...input,
      name: e.target.value,
      location: 'city'
    })
  }

  function handleInputCountry(e) {
    setInput({
      name: e.target.value,
      location: 'country'
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.name || input.name === '') {
      alert('Debes ingresar una ciudad o país')
    } else {
      navigate(`/searcher/location/${input.location.toLowerCase()}/${input.name.toLowerCase()}`)
    }
  }

  function locationOnClick (){
    navigate(`/searcher/location/city/${position.city.toLowerCase()}`)
  }

  return (
    <>
      <div className={s.formBox}>
        <form>
          <input className={s.city} type="text" placeholder='Ciudad' onChange={(e) => handleInputCity(e)} name='city' id='city' />
          <div className={s.line}><p>y/o</p></div>
          <select
            className={s.country}
            type="text"
            name='country'
            id='country'
            onChange={(e) => handleInputCountry(e)}
          >
            <option value="">País</option>
            <option value="chile">Chile</option>
            <option value="argentina">Argentina</option>
            <option value="ecuador">Ecuador</option>
            <option value="peru">Peru</option>
            <option value="colombia">Colombia</option>
          </select>
          <button onClick={handleSubmit} className={s.button}><img className={s.icon} src={icon} alt="" /></button>
        </form>
        <div onClick={locationOnClick} className={s.searchByLocationBox}>
          {
            position && <p>¿Deseas buscar en mascotas en {position.city}, {position.country}?</p>
          }
        </div>
      </div>
    </>
  )
}

export default HomeSearcher
