import React, { useState, useEffect } from "react";
import s from '../../css/PetDetail.module.css'
import NavBar from "../../assets/NavBar/NavBar.jsx";
import Footer from '../../assets/Footer/Footer.js'
import Card from '../../assets/Card/Card.js'
import { InfoApi } from "../../assets/dataMockups/InfoApi";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../../assets/Arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPets, getDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";


const PetDetail = () => {
  let { id } = useParams();
  const allPets = useSelector((state) => state.allPets)
  const estado = useSelector((state) => state.petDetail)
  const dispatch = useDispatch();
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectImage, setSelectImage] = useState();

  useEffect(() => {
    dispatch(getAllPets())
  }, [dispatch])

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  const Api = estado[0]


  const cantidad = Api?.photos?.length
  // console.log(cantidad)
  if (!Array.isArray(Api?.photos) || cantidad === 0) return;

  const ApiCerca = allPets?.filter(el => el.contact.address.country === Api?.contact.address.country && el.id !== Api?.id).slice(0, 5)
  const ApiOrganization = allPets?.filter(el => el.organization_animal_id === Api?.organization_animal_id && el.id !== Api?.id).slice(6, 11)
  // const [preImage, setPrevImage] = useState(Api && Api?.photos[0]?.large);
  // const [nextImage, setNextImage] = useState(Api && Api?.photos[0]?.large);


  // setSelectImage(Api?.photos[0]?.small)
  function previus() {
    const condition = selectIndex > 0;
    const nextIndex = condition ? selectIndex - 1 : Api.photos.length - 1;
    setSelectIndex(nextIndex);
  }

  function next() {
    const condition = selectIndex < Api.photos.length - 1;
    const nextIndex = condition ? selectIndex + 1 : 0;
    setSelectIndex(nextIndex);
  }

  return (
    <>
      <div className={s.contenedorPadre}>
        <NavBar />

        {
          estado.length > 0 ?

            <>
                <div className={s.contenedorImg}>
                  <button className={s.buttonLeft} onClick={previus}> < Arrow /> </button>
                  {Api.photos && Api.photos.map((el, index) => {
                    return (
                      <div className={s.slide}>
                        {selectIndex === index && (
                          <img key={index} className={s.img} src={el.small} />
                        )}
                      </div>
                    )
                  })}
                  <button className={s.buttonRight} onClick={next}>< Arrow /></button>
                </div>
              

              <div className={s.contenedorMedium}>

                <div className={s.contenedorDetalles}>
                  <div className={s.name}>
                    <h3 className={s.h3}>{Api.name}</h3>
                    <p className={s.p}>{Api.breeds.primary} | {Api.contact.address.city},{Api.contact.address.state}</p>
                  </div>
                  <div className={s.etiquetas}>
                    <p>{Api.age}</p>○ <p>{Api.gender}</p> ○ <p>{Api.size}</p> ○ <p>{Api.colors.primary}</p>
                  </div>
                  <div className={s.sobre}>
                    <h3 className={s.h3}>Sobre</h3>
                    {Api.attributes.shots_current === true && Api.attributes.spayed_neutered ?
                      <div className={s.size}>
                        <h4 className={s.h4}>CHARACTERISTICS</h4>
                        <div className={s.sizeTags}>
                          {Api.tags ? Api.tags.map(el => <p className={s.p}>{el}</p>) : <p>no tiene etiquetas</p>}
                        </div>
                      </div> : undefined}
                    {Api.attributes.house_trained === true ?
                      <div className={s.size}>
                        <h4 className={s.h4}>HOUSE-TRAINED</h4>
                        <p className={s.p}>Yes</p>
                      </div> : undefined}
                    {Api.attributes.shots_current === true && Api.attributes.spayed_neutered ?
                      <div className={s.size}>
                        <h4 className={s.h4}>HEALTH</h4>
                        <p className={s.p}>Vaccinations up to date, spayed / neutered.</p>
                      </div> : undefined}
                    <div className={s.size}>
                      <h4 className={s.h4}>COAT LENGTH</h4>
                      <p className={s.p}>{Api.coat}</p>
                    </div>
                  </div>
                  <div className={s.contenedorMascota}>
                    <h3 className={s.h3}>Meet {Api.name}</h3>
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
                      <Link to='/sponsor'>
                        <button className={s.buttonSponsor}>Sponsor</button>
                      </Link>
                      <Link to='/favorites'>
                        <button className={s.buttonFavorite}>Favoritos</button>
                      </Link>
                    </div>
                  </div>


                  <div className={s.contenedorPrincipal}>
                    <div className={s.name}>
                      <h3 className={s.h3}>Soy Foundation</h3>
                      <h4 className={s.h4}>{Api.contact.address.city},{Api.contact.address.state}</h4>
                    </div>
                    <div className={s.nameImg}>
                      <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6e3Wjv9StgTRGHXagFiBebV7xVdo6DanaNIgUJCaGmVHJB9tNrUoGgOKlegQN6APR5g&usqp=CAU' alt="imagen" />
                    </div>

                    <div className={s.contenedorDirection}>
                      <div className={s.direction}>
                        <div className={s.directionInterior}>
                          <h3 className={s.h3}>Location Address</h3>
                          <p className={s.p}>{Api.contact.address.address1}</p>
                          <p className={s.p}>{Api.contact.address.city},{Api.contact.address.state},{Api.contact.address.postcode}</p>
                          <p className={s.p}>San Juan, CP: 2725</p>
                        </div>
                        <div className={s.directionInterior}>
                          <p className={s.p}>{Api.contact.email}</p>
                        </div>
                        <div className={s.directionInterior}>
                          <p className={s.p}>{Api.contact.phone}</p>
                        </div>
                      </div>

                    </div>

                  </div>


                </div>
              </div>
              <div className={s.mascotasCerca}>
                <h1 className={s.proximityTitle}>Mascotas Para Ser Adoptadas en la misma fundacion</h1>
                <div className={s.relatedBox}>
                  {
                    ApiOrganization && ApiOrganization?.map(({ id, photos, name, contact, age }) => {
                      return <Card key={id} img={photos[0].small} name={name} location={contact.address.address1} age={age} cardType='home' id={id}/>
                    })
                  }
                </div>

              </div>
              <div className={s.mascotasFoundation}>
                <h1 className={s.proximityTitle}>Mascotas Para Ser Adoptadas en tu Ciudad</h1>
                <div className={s.relatedBox}>
                  {
                    ApiCerca && ApiCerca?.map(({ id, photos, name, contact, age }) => {
                      return <Card key={id} img={photos[0].small} name={name} location={contact.address.address1} age={age} cardType='home' id={id}/>
                    })
                  }
                </div>

              </div>
            </>
            : <Card />

        }
      </div>
      <Footer />

    </>
  )
}

export default PetDetail
