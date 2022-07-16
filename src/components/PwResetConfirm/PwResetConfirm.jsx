import React from 'react'
import s from '../../css/PwResetConfirm.module.css';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import { pwChange } from '../../redux/actions';


export default function PwResetConfirm() {

    const dispatch = useDispatch();
	const { token } = useParams()
	const msg = useSelector(state => state.reducer.pwReset)
	const confirm = useSelector(state => state.reducer.pwChange)
	const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
	const onSubmit = data => {
		if (data.password1 !== data.password2) return alert('Las claves no coinciden')
		
			dispatch(pwChange(data, token)).then(()=>{
				alert ('La clave ha sido actualizada')
			})
		

	};

	
    return (
		<main className={s.container}>
			<div className={s.notification}>
				<div className={s.logo}>
					<img src="https://i.postimg.cc/x8y022Hb/adoptame-logo-resplandor.png" alt="Adoptame Logo" />
				</div>
				<div className={s.notificationBottom}>
					<div className={s.right}>
                        <h2>Cambia tu contraseña</h2>				
                        <form onSubmit={handleSubmit(onSubmit)}>
							<input type='password' 
								{...register('password1', {
									required: 'Debes ingresar tu nueva clave',
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{4,50}$/,
										message: 'Min 8, Mayúscula, Minúscula, Número y Especial'
									}
									})} placeholder='Contraseña' />
									<p>{errors.password1?.message}</p>
							<input type='password' {...register('password2', {required: 'La clave debe ser igual'})} placeholder='Confirma tu contraseña' />					
							<button>Aceptar</button>
						</form>

                    </div>
				</div>
				
			</div>
		</main>
	)
}
