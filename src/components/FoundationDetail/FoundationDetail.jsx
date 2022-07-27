import React, { useState, useEffect } from "react";
import s from '../../css/FoundationDetail.module.css'
import NavBar from "../../assets/NavBar/NavBar.jsx";
import Footer from '../../assets/Footer/Footer.js'
import Card from '../../assets/Card/Card.js'
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../../assets/Arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPets, getDetail, resetPetDetail } from "../../redux/petsActions";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router'
import { getAllFoundations } from "../../redux/foundationsActions";
import { getReview } from "../../redux/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
    primary: "#504F6F"
};

const PetDetail = () => {
    const token = localStorage.token;
    let { id } = useParams();
    const allPets = useSelector((state) => state.petsReducer.allPets)
    const estado = useSelector((state) => state.petsReducer.petDetail)
    const foundations = useSelector(state => state.foundationsReducer.allFoundations)
    const foundation = foundations.find(f => f.id == id)
    const review = useSelector(state => state.reducer.review)
    const dispatch = useDispatch();
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectImage, setSelectImage] = useState();
    const navigate = useNavigate()
    const stars = Array(5).fill(0)

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    

    useEffect(() => {
        dispatch(getAllPets())
        dispatch(getDetail(id))
        dispatch(getAllFoundations())
        window.scrollTo(0, 0)
        dispatch(getReview(id))
        return () => {
            dispatch(resetPetDetail())
        }
    }, [dispatch, id])
    const Api = estado
    const ApiCerca = allPets?.filter(el => el.contact.address.city === Api.contact?.address.city && el.id !== Api?.id).slice(0, 5)
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
    function handleClick(e) {
        e.preventDefault();

        if (!localStorage.token)  {
            alert('Para realizar un comentario debes estar logueado');
            navigate('/login');
        }else{
            navigate(`/review/${foundation?.id}`)
        }
    }
    
    return (
        <>
            <div className={s.contenedorPadre}>
                <NavBar />
                <>
                    <div className={s.top}>
                        <button className={s.buttonLeft} onClick={previus}> < Arrow className={s.arrow} /> </button>
                        <div className={s.contenedorImg}>
                            <div className={s.slide}>
                                <img className={s.img} src={foundation?.photo} />
                            </div>
                        </div>
                        <button className={s.buttonRight} onClick={next}><Arrow className={s.arrow} /></button>
                        <div className={s.topRight}>
                            <div className={s.name}>
                                <h3 className={s.h3}>{foundation?.name}</h3>
                                {<p className={s.p}> {foundation?.city.name} - {foundation?.country}</p>}
                                {<p className={s.p}> {foundation?.email}</p>}
                                {<p className={s.p}> {foundation?.phone}</p>}
                                <div className={s.contenedorStars}>
                                    {foundation && foundation?.stars?.length > 0 ? stars?.map((_, index) => {
                                        return (
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                key={index}
                                                color={(foundation?.stars[0]) > index ? colors.primary : colors.grey}
                                                className={s.stars}
                                            />
                                        )
                                    }):
                                    null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.medium}>

                        <div className={s.contenedorMedium}>
                            <div className={s.contenedorAdopcion}>
                                <div className={s.contenedorPrincipalAdopcion}>
                                    <div className={s.name}>
                                        <h3 className={s.h3}>¿Que opinas de<span>{foundation?.name}?</span></h3>

                                    </div>
                                    <div className={s.contenedorButtons}>
                                        
                                            <button onClick={handleClick} className={s.buttonAdoptar} >Deja tu comentario</button>
                                        
                                        <Link to='/faqs'>
                                            <button className={s.buttonAdoptar}>Preguntas frecuentes</button>
                                        </Link>
                                    </div>
                                    <div>
                                        {foundation ?
                                            <button className={s.buttonSponsor} onClick={handleClick}>Donar</button>
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.contenedorDeComentarios}>

                            {review?.comentarios?.length > 0 ? review.comentarios.map((el) => {
                                return (
                                    <div className={s.componentComent}>
                                        <div className={s.compName}><h3>{el.name}</h3></div>
                                        <div className={s.contenedorStars}>
                                            {stars?.map((_, index) => {
                                                return (
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        key={index}
                                                        color={(review?.comentarios[0].start) > index ? colors.orange : colors.grey}
                                                        className={s.stars}
                                                    />
                                                )
                                            })}
                                        </div>
                                        <div className={s.comentario}>
                                            <span>{el.coment}</span>
                                        </div>
                                    </div>
                                )
                            }) :
                                <div className={s.componentComent}>
                                    <h3>No hay comentarios de esta fundacion</h3>
                                </div>}
                        </div>

                    </div>


                    {ApiCerca.length > 0 ?
                        <div className={s.mascotasCerca}>
                            <h1 className={s.proximityTitle}>Otras Mascotas En Tu Ciudad</h1>
                            <div className={s.relatedBox}>
                                {
                                    ApiCerca && ApiCerca?.map(({ id, photos, name, contact, age }) => {
                                        return <Card key={id} img={photos[0].option_1} name={name} location={`${contact.address.city} - ${contact.address.country}`} age={age} cardType='home' id={id} />
                                    })
                                }
                            </div>
                        </div> : null}
                </>



            </div>
            <Footer />

        </>
    )
}

export default PetDetail
