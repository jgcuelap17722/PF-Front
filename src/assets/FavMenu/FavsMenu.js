import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom';
import FavMiniCard from './FavMiniCard'
import { getPetFavs } from '../../redux/petsActions';
import arrow from '../../assets/icons/dropdown-arrow.svg'
import s from '../../css/FavsMenu.module.css'
import notFound from '../images/not-found.png'

const FavsMenu = ({ userId }) => {

  const petsFavs = useSelector(state => state.petsReducer.petsFavs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPetFavs(userId))

  // }, [dispatch, petsFavs])
  }, [dispatch])


  return (
    <div className={s.favsManuBox}>
      <div className={s.linkBox}>
        <Link to={'/favorites'} ><FontAwesomeIcon icon={faStar} className={s.favStar} /></Link>
        {/*<img className={s.arrowIcon} src={arrow} alt="" />*/}
      </div>

      <div className={s.favsMenuList}>
        <div className={s.favsMenuListTitle}>
          <p>Favoritos</p>
        </div>
        <div className={s.listBox}>
          {
            petsFavs.length > 0
              ?
              petsFavs.map((e, index) => {
                let photo = e.photos[0] === undefined ? notFound : e.photos[0].option_1
                return (
                  <FavMiniCard
                    key={`fav_m${e.name}${index}`}
                    petId={e.id}
                    img={photo}
                    name={e.name}
                    city={`${e.contact.address.city}, ${e.contact.address.country}`}
                    age={e.age}
                    userId={userId}
                  />)
              })
              : <div className={s.empty}> <p> No tienes mascotas favoritas</p> </div>
          }
        </div>
        {
          petsFavs.length > 0 && (
            <div className={s.favsMenuLink}>
              <Link to="/favorites">Ver todos los favoritos</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FavsMenu