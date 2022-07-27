import { useEffect } from 'react';
import s from '../../css/EmailConfirmed.module.css';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { emailConfirmed } from '../../redux/actions.js';
import { useDispatch } from 'react-redux';

export default function EmailConfirmed() {

	const navigate = useNavigate();
	const { token } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if(token){
			dispatch(emailConfirmed(token));
		}
	}, [dispatch]);
	function handleAccept(){
		navigate('/login');
	}

	return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<p>Email verificado correctamente!.</p>
					<p>Puedes iniciar sesión haciendo click en Aceptar.</p>				
				</div>
				<button onClick={handleAccept}>Aceptar</button>
			</div>
		</main>
	)
}