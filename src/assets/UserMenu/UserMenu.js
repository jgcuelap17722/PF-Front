import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import FavMiniCard from '../FavMenu/FavMiniCard'
import { getPetFavs } from '../../redux/petsActions';
import { resetUserLogged, createAuth0User } from '../../redux/actions';
import arrow from '../../assets/icons/dropdown-arrow.svg'
import s from '../../css/UserMenu.module.css'
import notFound from '../images/not-found.png'
import userDefault from '../images/userDefault.jpg'
import { useAuth0 } from '@auth0/auth0-react';

const UserMenu = ({ userId, name = 'UsuarioTest', photo = userDefault, lastName }) => {

  const petsFavs = useSelector(state => state.petsReducer.petsFavs)
  const token = localStorage.getItem('token');
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [ accessToken, setAccessToken ] = useState(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();



  useEffect(() => {
    dispatch(getPetFavs(userId))

    if(isAuthenticated && localStorage.userDetail){
      dispatch(createAuth0User(auth0User, accessToken));
    }

  }, [dispatch])

  const getAccessToken = async () => {
    const domain = "dev-s-kmhkyz.us.auth0.com";
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });
      setAccessToken(accessToken);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if(isAuthenticated){
      console.log('creando usuario auth0');
      dispatch(createAuth0User(auth0User, accessToken));
    }
  }, [])

  useEffect(() => {
   
    getAccessToken();
  }, [getAccessToken, user?.sub]);

  const auth0User = {
    role: 'user',
    name: user?.given_name,
    lastName: user?.family_name,
    countryId: user?.['https://example.com/country_id'],
    cityId: user?.['https://example.com/city'],
    email: user?.email,
    auth0: true,
    countryName: user?.['https://example.com/country_name'],
    userId: user?.sub,
    password: Number(new Date()).toString()
  }

  localStorage.setItem('userDetail', JSON.stringify(auth0User));
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('userId', auth0User.userId);

  function closeSesion() {
    if (token) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('user');
      localStorage.removeItem('userDetail');
      localStorage.removeItem('email');
      dispatch(resetUserLogged())

      setTimeout( () => {
        Navigate('/login');
      },1000)
    }
  }

  return (
    <div className={s.userManuBox}>
      <div className={s.linkBox}>
        <div className={s.userImgBox}>
          <Link to={token ? '/dashboard' : isAuthenticated ? '/dashboard/auth0' : '/register' }>
            <p>{token ? <img src={photo} alt="" /> : isAuthenticated ? <div className={s.imgAuth0}><img src={user.picture} referrerpolicy="no-referrer" /></div> : 'Registro'}</p>
          </Link>
          
        </div>
      </div>

      <div className={s.favsMenuList}>
        <div className={s.favsMenuListTitle}>
          <p>Hola {name}</p>
        </div>
        <div className={s.listBox}>

          <div className={s.userOptions}>
            <Link to={isAuthenticated ? '/dashboard/auth0' : '/dashboard'}>Mi Perfil</Link>
          </div>
          <div className={s.userOptions}>
            <Link to={'/create-pet'}>Dar en Adopción una Mascota</Link>
          </div>
          <div className={s.userOptions}>
            <Link to="#">
              <p onClick={isAuthenticated ? () => logout() : token ? () => closeSesion() : null}>{token || isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu