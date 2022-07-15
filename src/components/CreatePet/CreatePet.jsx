import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NavBar from '../../assets/NavBar/NavBar';
import Footer from '../../assets/Footer/Footer';
import s from '../../css/CreatePet.module.css';
import { catBreeds } from '../../assets/dataMockups/catBreed.js';
import { dogBreeds } from '../../assets/dataMockups/dogBreed.js';
import { InfoApi } from '../../assets/dataMockups/InfoApi.js';



export default function CreatePet() {

	const allColors = InfoApi.map( p => p.colors.primary);
	const colors = allColors.filter( ( c, index ) => allColors.indexOf(c) === index );


	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	
	return (
		<div>
			<NavBar />
			<div className={s.container}>
				<div className={s.left}>
					<div className={s.overflow}></div>
				</div>
				<div className={s.right}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<select {...register("Type", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Tipo</option>
								<option value="cat">Gato</option>
								<option value="dot">Perro</option>
							</select>
							{ errors?.Type && <p className={s.error}>{errors.Type.message}</p> }
						</div>

						<div>
							<select {...register("Breed", {required: "error en este input"})}>
								<option value="" disabled selected hidden>Raza</option>
									<option value="siamesse">Siamesse</option> 
							</select>
							{ errors?.Breed && <p className={s.error}>{errors.Breed.message}</p> }
						</div>
						<div>
							<select  {...register("Age", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Edad</option>
								<option value="puppy">Cachorro</option>
								<option value="young">Joven</option>
								<option value="adult">Adulto</option>
								<option value="senior">Mayor</option>
							</select>
							{ errors?.Age && <p className={s.error}>{errors.Age.message}</p> }
						</div>
						<div>
							<input {...register("petName", { required: "error en este input" })} type="text" placeholder="Nombre de tu mascota" />
							{ errors?.petName && <p className={s.error}>{errors.petName.message}</p> }
						</div>
						<div>
							<select {...register("Genre", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Género</option>
								<option value="male">Macho</option>
								<option value="female">Hembra</option>
							</select>
							{ errors?.Genre && <p className={s.error}>{errors.Genre.message}</p> }
						</div>
						<div>
							<select {...register("Size", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Tamaño</option>
								<option value="small">Pequeño</option>
								<option value="medium">Mediano</option>
								<option value="large">Grande</option>
							</select>
							{ errors?.Size && <p className={s.error}>{errors.Size.message}</p> }
						</div>
						<div>
							<select {...register("Color", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Color</option>
									<option value="black">Negro</option>
								{colors && colors.map( c => 
									<option value={c}>{c}</option>
								)}
							</select>
							{ errors?.Color && <p className={s.error}>{errors.Color.message}</p> }
						</div>
						<div>
							<select {...register("hairType", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Tipo de Pelo</option>
								<option value="hairless">Sin Pelo</option>
								<option value="short">Corto</option>
								<option value="medium">Medio</option>
								<option value="large">Largo</option>
								<option value="wire">Alambre</option>
								<option value="curly">Crespo</option>
							</select>
							{ errors?.hairType && <p className={s.error}>{errors.hairType.message}</p> }
						</div>
						<div>
							<select {...register("Vaccines", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Vacunas</option>
								<option value="true">Si</option>
								<option value="false">No</option>
							</select>
							{ errors?.Vaccines && <p className={s.error}>{errors.Vaccines.message}</p> }
						</div>
						<div>
							<select {...register("Castrated", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Castrado</option>
								<option value="true">Si</option>
								<option value="false">No</option>
							</select>
							{ errors?.Castrated && <p className={s.error}>{errors.Castrated.message}</p> }
						</div>
						<div>
							<select {...register("specialCares", { required: "error en este input" })}>
								<option value="" disabled selected hidden>Cuidados Especiales</option>
								<option value="true">Si</option>
								<option value="false">No</option>
							</select>
							{ errors?.specialCares && <p className={s.error}>{errors.specialCares.message}</p> }
						</div>
						
						<button type='submit'>Crear Mascota</button>
					</form>
				</div>					
			</div>
			<Footer />
		</div>
	)
}