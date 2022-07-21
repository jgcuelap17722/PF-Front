import React from 'react';
import s from '../../css/UpdateModalForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

export default function UpdateModalForm({ modalState, closeModal }) {

	const { register, handleSubmit, formState: { errors } } = useForm();

	return (
		<main className={ modalState ? s.showModal : s.hiddenModal} >
				<FontAwesomeIcon icon={faXmark} className={s.closeModalIcon} onClick={closeModal} />
			<form>
					<h1>Edición General</h1>
						<div>
							<select {...register("breedId", {required: "Selecciona un tipo de raza"})}>
								<option value="" disabled selected hidden>Raza</option>
									{/*{breeds && breeds.map( b =>  
										<option value={b.id}>{b.nameBreed}</option>
									)}*/}
							</select>
							{/*{ errors?.breedId && <p className={s.error}>{errors.breedId.message}</p> }*/}
						</div>
						<div>
							<input {...register("name", { 
										required: "Debes ingresar un nombre",
										maxLength: {
											value: 20,
											message: "El nombre no puede contener más de 20 caracteres"
										}
										 })} placeholder="Nombre de tu mascota" />
										
							{/*{ errors?.name && <p className={s.error}>{errors.name.message}</p> }*/}
						</div>
						
						<div>
							<select {...register("colorId", { required: "Selecciona un color" })}>
								<option value="" disabled selected hidden>Color</option>
									{/*{ colors && colors.map( (c) =>
											<option value={c.id}>{c.nameColor}</option>
									)}*/}
							</select>
							{/*{ errors?.colorId && <p className={s.error}>{errors.colorId.message}</p> }*/}
						</div>
						
						<div>
							<select {...register("health", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Vacunas</option>
								<option value="vacunas al dia">Vacunas al día</option>
								<option value="no vacunado">No vacunado</option>
							</select>
							{/*{ errors?.health && <p className={s.error}>{errors.health.message}</p> }*/}
						</div>
						<div>
							<select {...register("castrated", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Castrado</option>
								<option value="true">Si</option>
								<option value="false">No</option>
							</select>
							{/*{ errors?.castrated && <p className={s.error}>{errors.castrated.message}</p> }*/}
						</div>
						<div id="environment">
							<div id="environment_children">Entorno
								<select {...register("children")}>
									<option value="">Niños</option>
									<option value="true">Si</option>
									<option value="false">No</option>
								</select>
								{/*{ errors?.children && <p className={s.error}>{errors.children.message}</p> }*/}
							</div>
							<div>
								<select {...register("dogs")}>
									<option value="">Perros</option>
									<option value="true">Si</option>
									<option value="false">No</option>
								</select>
								{/*{ errors?.dogs && <p className={s.error}>{errors.dogs.message}</p> }*/}
							</div>
							<div>
								<select {...register("cats")}>
									<option value="">Gatos</option>
									<option value="true">Si</option>
									<option value="false">No</option>
								</select>
								{/*{ errors?.cats && <p className={s.error}>{errors.cats.message}</p> }*/}
							</div>
						</div>
						<div>
      						<input {...register("photos")}
      							   type="file"
      							   accept="image/png, image/jpeg, image/jpg"
      							   multiple />
      						{/*{ errors?.photos && <p className={s.error}>{errors.photos.message}</p> }*/}
						</div>	
						<div id="textarea">
							<textarea {...register("description", { 
											required: "Debes ingresar una descripción de tu mascota", 
											minLength: {
												value: 100,
												message: "Ingresa minimo 100 caracteres"
											}
							})}
							placeholder="Ingresa una breve descripción de tu mascota"/>
							{/*{ errors?.description && <p className={s.error}>{errors.description.message}</p> }*/}
						</div>
						<button type='submit'>Guardar Cambios</button>
					</form>
		</main>
	)
}