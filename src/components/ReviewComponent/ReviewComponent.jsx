import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapLocationDot, faLocationDot, faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import NavBar from "../../assets/NavBar/NavBar";
import Footer from "../../assets/Footer/Footer";
import s from '../../css/ReviewComponent.module.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../redux/actions";
import { getAllFoundations } from "../../redux/foundationsActions";
import { useParams } from "react-router-dom";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};
export function validate(input) {
  let errors = {};
  if (!input.coment) errors.coment = 'Por favor ingrese un comentario'

  if (!input.point) errors.point = 'Por favor seleccione un valor'
  return errors
}

const ReviewComponent = () => {
  let { id } = useParams();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    coment: '',
    point: 0
  })
  let fundacion = useSelector((state) => state.foundationsReducer.allFoundations)
  fundacion = fundacion?.filter(el => el.id == id)

  const [errors, setErrors] = useState({
    coment:'Por favor ingrese un comentario'
  })


  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getAllFoundations())

    
  }, [])

  const obj = {
    msg: {
      coment: input.coment,
      point: input.point
    },
    id: id,
    userId: userId  
  }
  const handleClick = value => {
    setInput({
      ...input,
      point: value
    })
    setErrors(validate({
      ...input,
      point: value
    })) 
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
  function handleSubmit(e) {
  e.preventDefault();
  dispatch(postReview(obj, token))
  .then(()=> {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu comentario ha sido publicado',
      showConfirmButton: false,
      timer: 2000
    }).then(()=> navigate(`/foundation/${id}`))
  })
  
  } 


  return (
    <div >

      <NavBar />
      {Object.keys(fundacion).length > 0 ?
        <div className={s.content}>
          
          <div className={s.component}>
            <div className={s.imgContainer}>
              <img className={s.imagenFundacion} src={fundacion[0].photo}></img>
            </div>
            <div className={s.componentGlobal}>
              <div >
                <h1>{fundacion[0].name} </h1>
                <h2><FontAwesomeIcon icon={faEnvelope} /> {fundacion[0].email} </h2>
                <h2><FontAwesomeIcon icon={faLocationDot} /> {fundacion[0].country} {fundacion[0].city.name}</h2>
                <h2><FontAwesomeIcon icon={faSquarePhone} /> {fundacion[0].phone}  </h2>
              </div>

              <div className={s.contentStars}>
                <h2>Califica esta fundacion</h2>

                <div >
                  {stars?.map((_, index) => {
                    return (
                      <FontAwesomeIcon
                        icon={faStar}
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || input.point) > index ? colors.orange : colors.grey}
                        className={s.stars}
                      />
                    )
                  })}
                </div>
                  {errors.point && (<p className={s.error}>{errors.point}</p>)}
              </div>

              <div className={s.contentInput}>
                <h3>Escribe tu opinion</h3>
                <textarea name='coment' type='text' max={500} onChange={handleChange} placeholder="Describe tu experiencia"></textarea>
              {errors.coment && (<p className={s.error}>{errors.coment}</p>)}
              </div>
              <button onClick={handleSubmit} disabled={Object.keys(errors).length === 0 ? false : true }>Enviar</button>
            </div>
            


          </div>
          <button className={s.back} onClick={()=> navigate(`/foundation/${id}`)}>Regresar</button>
        </div>
        : null
      }
      <Footer />

    </div>
  )
}

export default ReviewComponent;
