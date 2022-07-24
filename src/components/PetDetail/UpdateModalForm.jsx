import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from '../../css/UpdateModalForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { getBreedsByPetType, updatePetById, resetUpdateMsg } from '../../redux/petsActions.js';

export default function UpdateModalForm({ modalState, closeModal, petDetail }) {

	const { register, 
					handleSubmit, 
					formState: { errors }, 
					watch,
					setValue
					} = useForm();

	if(localStorage.petDetail){
		var storagePetDetail = JSON.parse(localStorage.petDetail);
	}

	const onSubmit = data => {


		if(typeof data.breedId === 'string') data.breedId = Number(data.breedId);

		if(data.castrated === 'true') data.castrated = true;
		else if(data.castrated === 'false') data.castrated = false;
		else if(data.castrated === 'No Castrado') data.castrated = false;
		else if(data.castrated === 'Castrado') data.castrated = true;


		/* ENVIRONMENT */

		if(data.children === '') data.children = null;
		else if(data.children === 'true') data.children = true;
		else if(data.house_trained === 'false') data.children = false;

		if(data.dogs === '') data.dogs = null; 
		else if(data.dogs === 'true') data.dogs = true;
		else if (data.dogs === 'false') data.dogs = false;

		if(data.cats === '') data.cats = null;
		else if(data.cats === 'true') data.cats = true;
		else if (data.cats === 'false') data.cats = false;

		data.environment = {
			children: data.children,
			dogs: data.dogs,
			cats: data.cats
		}

		data.petId = petDetail.id;

		data.urlPhotosDb = currentPhotos?.map( p => {
			return p.option_1;
		})
		

		let formData = new FormData();
		for(let i = 0; i < data.photos.length; i++){
			formData.append('photos', data.photos[i])
		}
		formData.append('data', JSON.stringify(data))
		dispatch(updatePetById(formData, storagePetDetail.id, token)).then(() => {
			setValue('photos', '');
			return closeModal()
		})
		

	}

	const dispatch = useDispatch();
	const token = localStorage.token;
	const breeds = useSelector( state => state.petsReducer.breedsByPetType );
	const breed = breeds?.find( b => b.nameBreed === storagePetDetail.breed);
	const msg = useSelector( state => state.petsReducer.petUpdated );
	let [currentPhotos, setCurrentPhotos ] = useState(storagePetDetail.photos);

	useEffect(() => {

			if(storagePetDetail.type === 'gato'){
				dispatch(getBreedsByPetType('gato'));
			}else if (storagePetDetail.type === 'perro') {
				dispatch(getBreedsByPetType('perro'));
			}

			setValue('breedId', breed?.id)
			setValue('name', storagePetDetail.name);
			setValue('health', storagePetDetail.health);
			setValue('description', storagePetDetail.description);

			setCurrentPhotos(storagePetDetail.photos) 
			

			
			if(msg.message){
		      	Swal.fire({
				  icon: 'success',
				  title: 'Cambios Guardados Correctamente!',
				  showConfirmButton: false,
				  timer: 3500
				})
		      	return;
		    }else if(msg.error){
		      	Swal.fire({
				  icon: 'error',
				  title: 'Oops! ha ocurrido un error.',
				  showConfirmButton: false,
				  timer: 3500
				})
		      	return;
		    }

			return () => {
				dispatch(resetUpdateMsg());
			}

	}, [dispatch, modalState])

	function handlePhotoDelete(i){
		setCurrentPhotos( currentPhotos?.filter( (p, index) => index !== i )) 
	}
   	
   	
	return (
		<main className={ modalState ? s.showModal : s.hiddenModal} >
				<FontAwesomeIcon icon={faXmark} className={s.closeModalIcon} onClick={closeModal} />
				<div className={s.blur}></div>
			<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<p id={s.generalEdition}>{`Edicion General`}</p>
					</div>
					<div>
						<div className={s.left}>
							<div>
								<select {...register("breedId", {required: "Selecciona un tipo de raza"})}>
										<option value={breed?.id}  disabled selected hidden>{breed?.nameBreed}</option>
										{breeds && breeds.map( b =>  
											<option value={b.id}>{b.nameBreed}</option>
										)}
								</select>
								{ errors?.breedId && <p className={s.error}>{errors.breedId.message}</p> }
							</div>
							<div>
								<input {...register("name", { 
																			required: "Debes ingresar un nombre",
																			maxLength: {
																				value: 20,
																				message: "El nombre no puede contener más de 20 caracteres"
																			}
											 })} placeholder="Nombre de tu mascota" />
											
								{ errors?.name && <p className={s.error}>{errors.name.message}</p> }
							</div>
							<div>
								<select {...register("health", { required: "error en este input" })}>
									<option value={storagePetDetail.health} disabled selected hidden>{storagePetDetail.health}</option>
									<option value="vacunas al dia">Vacunas al día</option>
									<option value="no vacunado">No vacunado</option>
								</select>
								{ errors?.health && <p className={s.error}>{errors.health.message}</p> }
							</div>
							<div>
								<select {...register("castrated", { required: "error en este input" })}>
									<option  disabled selected hidden>{
									storagePetDetail.castrated === false && storagePetDetail.gender === 'hembra' ? 'No Esterilizada' 
									: storagePetDetail.castrated === true && storagePetDetail.gender === 'hembra' ? 'Esterilizada' : ''
									|| storagePetDetail.castrated === false && storagePetDetail.gender === 'macho'
									? 'No Castrado'
									: 'Castrado'}</option>
									<option value="true">Si</option>
									<option value="false">No</option>
								</select>
								{ errors?.castrated && <p className={s.error}>{errors.castrated.message}</p> }
							</div>
							<div>
      						<input {...register("photos")}
      							   type="file"
      							   accept="image/png, image/jpeg, image/jpg"
      							   multiple />
      						{ errors?.photos && <p className={s.error}>{errors.photos.message}</p> }
							</div>
						</div>

						<div className={s.right}>

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

							<div id="environment">
								<div id="environment_children">
									<select {...register("children")}>
										<option value="">{
											storagePetDetail.environment?.children 
											? 'Niños: Si' 
											: 'Niños: No' 
											|| storagePetDetail.environment?.children === null 
											? 'Niños: No Definido' 
											: null}
										</option>
										<option value="true">Si</option>
										<option value="false">No</option>
									</select>
								</div>
								<div>
									<select {...register("dogs")}>
										<option value="">{
											storagePetDetail.environment?.dogs 
											? 'Perros: Si' 
											: 'Perros: No' 
											|| storagePetDetail.environment?.dogs === null 
											? 'Perros: No Definido' 
											: null}
										</option>
										<option value="true">Si</option>
										<option value="false">No</option>
									</select>
								</div>
								<div>
									<select {...register("cats")}>
										<option value="" selected disabled>{
											storagePetDetail.environment?.cats 
											? 'Gatos: Si' 
											: 'Gatos No' 
											|| storagePetDetail.environment?.cats === null 
											? 'Gatos: No Definido' 
											: null}
										</option>
										<option value="true">Si</option>
										<option value="false">No</option>
									</select>
								</div>
							</div>
							<div className={s.images}>
								{currentPhotos?.map( (p, index) =>
									<div key={index}><FontAwesomeIcon onClick={ () => handlePhotoDelete(index)} icon={faXmark} className={s.deleteImgIcon}/><img  src={p.option_1} alt={`pet image n°${index+1}`} /></div>
								)}
							</div>

						</div>
					</div>
						<button type='submit'>Guardar Cambios</button>
					</form>
		</main>
	)
}