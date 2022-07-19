import { Link } from "react-router-dom";
import s from '../../css/DonationsConfirm.module.css'

export default function DonationsConfirm() {
    
    return (
        <div>

                <div className={s.content}>
                    <div className={s.component}>
                        <div>
                            <h2>Gracias! tu pago fue confirmado ✔. Con tu aporte estás apoyando a las mascotas de las...</h2>
                            <h3>Fundaciones</h3>
                        </div>
                    </div>
                        <Link to={'/'}>
                            <button className={s.back}>Ir a Adoptame</button>
                        </Link>
                </div>
            
        </div>
    )
}