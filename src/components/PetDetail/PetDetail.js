import React from "react";
import s from '../../css/PetDetail.module.css'
import { ReactComponent as LeftArrow } from '../../assets/iconmonstr-angel-left-thin.svg'
import { ReactComponent as RightArrow } from '../../assets/iconmonstr-angel-right-thin.svg'

const PetDetail = () => {
  return (
    <div className={s.contenedorPadre}>
      <div className={s.contenedorPrincipal}>
        <div className={s.contenedorSlide}>
          <div className={s.contenedorImg}>
            <div className={s.slide}>
              <img className={s.img} src='https://images.ecestaticos.com/6uBjSmsBorRk6l_IHAxkBS1JCwE=/114x0:1997x1410/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F721%2F122%2F714%2F72112271431cb1078c3fe3e75ad5ab41.jpg' alt='Img dog' />
            </div>
          </div>
          <div className={s.controler}>
            <button className={s.buttonLeft}>
              <LeftArrow />
            </button>
            <button className={s.buttonRight}>
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
      <div className={s.contenedorMedium}>
      
        <div className={s.contenedorDetalles}>
          <div className={s.name}>
            <h3 className={s.h3}>Name</h3>
            <p className={s.p}>Raza, ciudad</p>
          </div>
          <div className={s.etiquetas}>
            <p className={s.p}>Etiquetas</p>
            <p className={s.p}>Etiquetas</p>
            <p className={s.p}>Etiquetas</p>
            <p className={s.p}>Etiquetas</p>
          </div>
          <div className={s.sobre}>
            <h3 className={s.h3}>Sobre</h3>
            <div className={s.size}>
              <h4 className={s.h4}>size</h4>
              <p className={s.p}>size</p>
            </div>
            <div className={s.salud}>
              <h4 className={s.h4}>Salud</h4>
              <p className={s.p}>Vacunas</p>
            </div>
          </div>
          <div className={s.contenedorMascota}>
            <h3 className={s.h3}>Conoce a la mascota</h3>
            <p className={s.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        
        <div className={s.contenedorAdopcion}>
          <div className={s.contenedorPrincipalAdopcion}>
            <div className={s.name}>
              <h3 className={s.h3}>¿Estás pensando en adoptar a Name? </h3>

            </div>
            <div className={s.contenedorButtons}>
              <button className={s.buttonAdoptar}>Adoptar</button>
              <button className={s.buttonAdoptar}>Preguntas frecuentes</button>
            </div>
            <div>
              <button className={s.buttonSponsor}>Sponsor</button>
              <button className={s.buttonFavorite}>Favoritos</button>
            </div>
          </div>
          <div className={s.contenedorPrincipal}>
            <div className={s.name}>
              <h3 className={s.h3}>Soy Foundation</h3>
              <h4 className={s.h4}>Ciudad</h4>
            </div>
            <div className={s.nameImg}>
              <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6e3Wjv9StgTRGHXagFiBebV7xVdo6DanaNIgUJCaGmVHJB9tNrUoGgOKlegQN6APR5g&usqp=CAU' alt="imagen" />
            </div>
            <div className={s.direction}>
              <div className={s.directionInterior}>
                <h3 className={s.h3}>  Direction Foundation </h3>
                <p className={s.p}>Calle 40</p>
                <p className={s.p}>San Juan, CP: 2725</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetDetail
