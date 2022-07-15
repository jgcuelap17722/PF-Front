import { Link } from 'react-router-dom';
import s from '../../css/Footer.module.css'
import logo from '../../assets/icons/Logo.svg'
import facebookIcon from '../../assets/icons/facebook-icon.svg'
import instagramIcon from '../../assets/icons/instagram-icon.svg'
import twitterIcon from '../../assets/icons/twitter-icon.svg'

const Footer = () => {
  return (
    <footer>
      <div className={s.logoBox}>
        <Link to={'/'} ><img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Mascotas_logo" /></Link>
      </div>
      <div className={s.linksBox}>
        <div className={s.linksColumn} >
          <Link to={'/'} >Sobre Nosotros</Link>
          <Link to={'/'} >Adoptar Mascotas</Link>
          <Link to={'/'} >Información sobre el Cuidado Animal</Link>
          <Link to={'/'} >Más Info</Link>
        </div>
        <div className={s.linksColumn} >
          <Link to={'/'} >Sobre Nosotros</Link>
          <Link to={'/'} >Adoptar Mascotas</Link>
          <Link to={'/'} >Información sobre el Cuidado Animal</Link>
          <Link to={'/'} >Más Info</Link>
        </div>
        <div className={s.linksColumn} >
          <p>Para conocer las últimas novedades en la adopción de mascotas y cuidado animal registrate!</p>
          <Link className={s.register} to='/register'>Registro</Link>
        </div>
      </div>
      <div className={s.socialMediaLinks}>
        <Link to={'/'}><img className={s.socialMediaIcons} src={facebookIcon} alt="" /></Link>
        <Link to={'/'}><img className={s.socialMediaIcons} src={instagramIcon} alt="" /></Link>
        <Link to={'/'}><img className={s.socialMediaIcons} src={twitterIcon} alt="" /></Link>
      </div>
    </footer>

  )
}

export default Footer