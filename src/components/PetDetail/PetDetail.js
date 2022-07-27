import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, 
         faLocationDot, 
         faEnvelope, 
         faSquarePhone, 
         faGear } from '@fortawesome/free-solid-svg-icons';
import s from '../../css/PetDetail.module.css'
import NavBar from "../../assets/NavBar/NavBar.jsx";
import Footer from '../../assets/Footer/Footer.js';
import Card from '../../assets/Card/Card.js';
import UpdateModalForm from './UpdateModalForm.jsx';
import { InfoApi } from "../../assets/dataMockups/InfoApi";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPets, getDetail, resetPetDetail } from "../../redux/petsActions";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router'
import notFound from '../../assets/images/not-found.png';
import { getAllFoundations } from "../../redux/foundationsActions";
import FavoriteBtn from "../../assets/FavoriteBtn/FavoriteBtn";
import { getPetFav } from '../../redux/petsActions'


const PetDetail = () => {
  let { id } = useParams();
  const allPets = useSelector((state) => state.petsReducer.allPets)
  const estado = useSelector((state) => state.petsReducer.petDetail)
  const foundations = useSelector(state => state.foundationsReducer.allFoundations)
  const foundation =foundations.find(f => f.id === estado.userId)
  const dispatch = useDispatch();
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectImage, setSelectImage] = useState();
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate()
  const idPetOwner = estado.userId;
  const idVisitorUser = Number(localStorage.userId);
  const userId = localStorage.getItem('userId') || false

  if(estado){
      localStorage.setItem('petDetail', JSON.stringify(estado))
  }
  
  useEffect(() => {
    dispatch(getAllPets())
    dispatch(getDetail(id))
    dispatch(getAllFoundations())
    window.scrollTo(0,0)

    if(modalState){
      document.body.style.overflow = 'hidden';
    }else{
       document.body.style.overflow = 'visible';
    }


    return ()=>{
      dispatch(resetPetDetail())
    }
  }, [dispatch, id, modalState])

  useEffect(() => {
    if (userId) {
      dispatch(getPetFav(userId, id))
    }
  }, [])
  

  const Api = estado

  // const cantidad = Api?.photos.length
  // console.log(cantidad)
  // if (!Array.isArray(Api?.photos) || cantidad === 0) return;
// console.log(allPets[0].contact.address.city);
  const ApiCerca = allPets?.filter(el => el.contact.address.city === Api.contact?.address.city && el.id !== Api?.id).slice(0, 5)
  // const ApiOrganization = allPets?.filter(el => el.organization_animal_id === Api?.organization_animal_id && el.id !== Api?.id).slice(6, 11)
  // const [preImage, setPrevImage] = useState(Api && Api?.photos[0]?.large);
  // const [nextImage, setNextImage] = useState(Api && Api?.photos[0]?.large);

  // setSelectImage(Api?.photos[0]?.small)
  function previus() {
    const condition = selectIndex > 0;
    const nextIndex = condition ? selectIndex - 1 : Object.keys(Api.photos).length - 1;
    setSelectIndex(nextIndex);
  }

  function next() {
    const condition = selectIndex < Object.keys(Api.photos).length - 1;
    const nextIndex = condition ? selectIndex + 1 : 0;
    setSelectIndex(nextIndex);
  }
  function handleClick(e){
    e.preventDefault();
    
    if(localStorage.token){
      localStorage.setItem('petDetail', JSON.stringify(estado));
      navigate(`/sponsor`) 
    }else{
      alert('Para realizar una donación debes estar logueado');
      navigate('/login');
    }
  }

  function openModal(){
    setModalState(true);
  }

  function closeModal(){
    setModalState(false);
  }

  return (
    <>
      <div className={s.contenedorPadre}>
        <UpdateModalForm modalState={modalState} closeModal={closeModal} petDetail={Api} />
        <NavBar />
          
            <>
              <div className={s.top}>
              <button className={s.buttonLeft} onClick={previus}> < Arrow /> </button>
                <div className={s.contenedorImg}>
               
                  {Api.photos && Api.photos.map((el, index) => {
                    return (
                  <div className={s.slide}>
                      
                    {selectIndex === index && (
                      <img key={index} className={s.img} src={Api.photos[index] === undefined ? notFound : el.option_1} />
                    )}
                      
                  </div>
                    )
                  })}
                </div>
              <button className={s.buttonRight} onClick={next}>< Arrow /></button>

                <div className={s.topRight}>
                  <div className={idPetOwner === idVisitorUser ? s.updateIcon : s.displayNone}>
                    <FontAwesomeIcon onClick={openModal} icon={faGear} />
                  </div>
                  <div className={s.name}>
                      <h3 className={s.h3}>{Api.name}</h3>
                      {<p className={s.p}>{Api.breed} | {Api.contact?.address.city} - {Api.contact?.address.country}</p>}
                    </div>
                    <div className={s.etiquetas}>
                      <p>• {Api.age}</p> • <p>{Api.gender}</p> • <p>{Api.size}</p> • <p>{Api.color}</p>
                    </div>
                   {Api.tags && Api.tags ?
                      <div className={s.size}>
                        <h4 className={s.h4}>CARACTERÍSTICAS</h4>
                        <div className={s.sizeTags}>
                          {Api.tags.length ? Api.tags.map(el => <p className={s.p}>{`• ${el}`}</p>) : <p className={s.p}>No publican</p>}
                        </div>
                      </div> : undefined}
                </div>
              </div>
              

              <div className={s.contenedorMedium}>

                <div className={s.contenedorDetalles}>
                 
                  <div className={s.info}>
                    <h3 className={s.h3}>INFORMACIÓN</h3>
                      <div className={s.size}>
                        <h4 className={s.h4}>{Api.gender === 'hembra' ? 'ESTERILIZADA' : 'CASTRADO'}</h4>
                        <p className={s.p}>{Api.castrated ? 'Si' : 'No'}</p>
                      </div>
                      <div className={s.size}>
                        <h4 className={s.h4}>ENTRENADO EN CASA</h4>
                        <p className={s.p}>{Api.attributes?.house_trained ? 'Si' : 'No'}</p>
                      </div>
                      <div className={s.size}>
                        <h4 className={s.h4}>CUIDADOS ESPECIALES</h4>
                        <p className={s.p}>{Api.attributes?.special_needs ? 'Si' : 'No'}</p>
                      </div>
                      <div className={s.size}>
                        <h4 className={s.h4}>PELO</h4>
                        <p className={s.p}>{Api.coat}</p>
                      </div>
                      <div className={s.size}>
                        <h4 className={s.h4}>DATOS MÉDICOS</h4>
                        <p className={s.p}>{Api.health}</p>
                      </div>
                      <div className={s.size}>
                        <h4 className={s.h4}>ENTORNO</h4>
                        <p className={s.p}>{Api.environment?.children ? 'Niños: Si' : 'Niños: No'}</p>
                        <p className={s.p}>{Api.environment?.dogs ? 'Perros: Si' : 'Perros: No'}</p>
                        <p className={s.p}>{Api.environment?.cats ? 'Gatos: Si' : 'Gatos: No'}</p>
                      </div>
                  </div>
                 
                </div>

                <div className={s.contenedorAdopcion}>
                    <div className={s.contenedorPrincipalAdopcion}>
                      <div className={s.name}>
                        <h3 className={s.h3}>¿Estás pensando en adoptar a<span>{Api.name}?</span></h3>

                      </div>
                      <div className={s.contenedorButtons}>
                        <Link to='/adoption'>
                          <button className={s.buttonAdoptar}>Adoptar</button>
                        </Link>
                        <Link to='/faqs'>
                          <button className={s.buttonAdoptar}>Preguntas frecuentes</button>
                        </Link>
                      </div>
                      <div>
                        {foundation?
                          <button className={s.buttonSponsor} onClick={handleClick}>Donar</button>
                          :null
                        }
                          {/* <FavoriteBtn userId={userId} petId={id}/> */}
                        <Link to='/favorites'>
                          <button className={foundation? s.buttonFavorite : s.buttonFavorite2}> {foundation? '★ Favoritos': '★ Agregar a Favoritos'}</button>
                        </Link>
                      </div>
                    </div>
                </div>
           


                
              </div>
              <div className={s.contenedorMascota}>
                <div className={s.title}>
                    <h3 className={s.h3}>Conoce a </h3> <h3 className={s.petName}>{Api.name}</h3>
                </div>
                    <p className={s.p}>{Api.description}</p>
                    
              </div>
              {foundation?
                <Link className={s.link} to={`/foundation/${foundation.id}`}>
                <div className={s.contenedorFundacion}>
                    <div className={s.name}>
                      <h3 className={s.h3}>{foundation.name}</h3>
                    </div>
                    <div className={s.nameImg}>
                      <img className={s.img} src={foundation.photo} alt="imagen" />
                    </div>

                    <div className={s.contenedorDirection}>
                      <div className={s.direction}>
                        <div className={s.directionInterior}>
                          <h3 className={s.h3}>Información Fundación</h3>
                          {foundation.address?
                          <p className={s.p}><FontAwesomeIcon icon={faLocationDot} className={s.addressIcon}/>{foundation.address}</p>
                          :null
                          }
                          <p className={s.p}><FontAwesomeIcon icon={faMapLocationDot} className={s.addressIcon}/>{foundation.cityId} - {foundation.countryId}</p>
                        </div>
                        <div className={s.directionInterior}>
                          <p className={s.p}><FontAwesomeIcon icon={faEnvelope} className={s.addressIcon}/>{Api.contact.email}</p>
                        </div>
                        <div className={s.directionInterior}>
                          <p className={s.p}><FontAwesomeIcon icon={faSquarePhone} className={s.addressIcon}/>{Api.contact.phone}</p>
                        </div>
                      </div>
                    </div>

                  </div></Link>
                  :undefined}
              {Api.contact?.address.city?
                <div className={s.mascotasFoundation}>
                {/*<h1 className={s.proximityTitle}>Mascotas Para Ser Adoptadas en la misma fundacion</h1>*/}
                <div className={s.relatedBox}>
                  {/*{
                    ApiOrganization && ApiOrganization?.map(({ id, photos, name, contact, age }) => {
                      return <Card key={id} img={photos[0].small} name={name} location={contact.address.address1} age={age} cardType='home' id={id} />
                    })
                  }*/}
                </div>

              </div>: undefined}
              
              {ApiCerca.length > 0 ? 
                <div className={s.mascotasCerca}>
                <h1 className={s.proximityTitle}>Otras Mascotas En Tu Ciudad</h1>
                <div className={s.relatedBox}>
                  {
                    ApiCerca && ApiCerca?.map(({ id, photos, name, contact, age}) => {
                      return <Card key={id} img={photos[0].option_1} name={name} location={`${contact.address.city} - ${contact.address.country}`} age={age} cardType='home' id={id} />
                    })
                  }
                </div>
              </div> : null }
            </>
          


      </div>
      <Footer />

    </>
  )
}

export default PetDetail