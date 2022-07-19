import React, { useState, useEffect } from "react";
import s from '../../css/PetDetail.module.css'
import NavBar from "../../assets/NavBar/NavBar.jsx";
import Footer from '../../assets/Footer/Footer.js'
import Card from '../../assets/Card/Card.js'
import { InfoApi } from "../../assets/dataMockups/InfoApi";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../../assets/Arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPets, getDetail, resetPetDetail } from "../../redux/petsActions";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router'
import notFound from '../../assets/images/not-found.png';

const PetDetail = () => {
  let { id } = useParams();
  const allPets = useSelector((state) => state.petsReducer.allPets)
  const estado = useSelector((state) => state.petsReducer.petDetail)
  const dispatch = useDispatch();
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectImage, setSelectImage] = useState();
  const navigate = useNavigate()
  
  
  
  useEffect(() => {
    dispatch(getAllPets())
    dispatch(getDetail(id))
    window.scrollTo(0,0)

    return ()=>{
      dispatch(resetPetDetail())
    }
  }, [dispatch, id])

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
  return (
    <>
      <div className={s.contenedorPadre}>
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
                  <div className={s.name}>
                      <h3 className={s.h3}>{Api.name}</h3>
                      {<p className={s.p}>{Api.breed} | {Api.contact?.address.city} - {Api.contact?.address.country}</p>}
                    </div>
                    <div className={s.etiquetas}>
                      <p>{Api.age}</p> • <p>{Api.gender}</p> • <p>{Api.size}</p> • <p>{Api.color}</p>
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
                        <h4 className={s.h4}>CASTRADO</h4>
                        <p className={s.p}>{Api.castrated ? 'Si' : 'No'}</p>
                      </div>
                      <div className={s.size}>
                        <h4 className={s.h4}>ENTRENADO - EN CASA</h4>
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
                        <h4 className={s.h4}>ENTORNO</h4>
                        <p className={s.p}>{Api.environment?.children ? 'Niños: Si' : 'Niños: No'}</p>
                        <p className={s.p}>{Api.environment?.dogs ? 'Perros: Si' : 'Perros: No'}</p>
                        <p className={s.p}>{Api.environment?.cats ? 'Gatos: Si' : 'Gatos: No'}</p>
                      </div>
                  </div>
                  <div className={s.contenedorMascota}>
                    <h3 className={s.h3}>Conoce a {Api.name}</h3>
                    <p className={s.p}>{Api.description}</p>
                  </div>
                </div>

                <div className={s.contenedorAdopcion}>
                    <div className={s.contenedorPrincipalAdopcion}>
                      <div className={s.name}>
                        <h3 className={s.h3}>{`¿Estás pensando en adoptar a ${Api.name}? `}</h3>

                      </div>
                      <div className={s.contenedorButtons}>
                        <Link to='/adopcion'>
                          <button className={s.buttonAdoptar}>Adoptar</button>
                        </Link>
                        <Link to='/faqs'>
                          <button className={s.buttonAdoptar}>Preguntas frecuentes</button>
                        </Link>
                      </div>
                      <div>
                          <button className={s.buttonSponsor} onClick={handleClick}>Donar</button>
                        <Link to='/favorites'>
                          <button className={s.buttonFavorite}>★ Favoritos</button>
                        </Link>
                      </div>
                    </div>
                </div>
                  


                
              </div>

              {/*{Api.contact.address.city?
                <div className={s.contenedorFundacion}>
                    <div className={s.name}>
                      <h3 className={s.h3}>Adopta un perro</h3>
                      <h4 className={s.h4}>{Api.contact.address.city},{Api.contact.address.country}</h4>
                    </div>
                    <div className={s.nameImg}>
                      <img className={s.img} src='https://i0.wp.com/soniablanco.es/wp-content/uploads/2014/01/adoptaunperro.jpg?fit=960%2C325&ssl=1' alt="imagen" />
                    </div>

                    <div className={s.contenedorDirection}>
                      <div className={s.direction}>
                        <div className={s.directionInterior}>
                          <h3 className={s.h3}>Dirección de la Fundación</h3>
                          <p className={s.p}>{Api.contact.address.address}</p>
                          <p className={s.p}>{Api.contact.address.city},{Api.contact.address.country},{Api.contact.address.postcode}</p>
                        </div>
                        <div className={s.directionInterior}>
                          <p className={s.p}>{Api.contact.email}</p>
                        </div>
                        <div className={s.directionInterior}>
                          <p className={s.p}>{Api.contact.phone}</p>
                        </div>
                      </div>
                    </div>

                  </div>:undefined}*/}
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
