

import {
	RESET_PET_DETAIL,
	GET_ALL_PETS,
	GET_DETAIL,
  TYPE_FILTER,
	BREED_FILTER,
	RESET_PET_ORDER,
	AGE_FILTER,
	SIZE_FILTER,
	GENRE_FILTER,
	// ENVIRONMENT_FILTER,
	// COAT_FILTER,
	// COLOR_FILTER,
	// ATTRIBUTES_FILTER,
	// DAYS_FILTER,
	// SHELTER_FILTER
} from './actions';

const initialState = {
	allPets: [],
	petDetail: {},
	petsFiltered: [],
	newUser: {},
	userDetail: {},
	userLogged: {},
	filterActive: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PETS:
			return {
				...state,
				allPets: action.payload,
				petsFiltered: action.payload,
			}
		case GET_DETAIL:
			return {
				...state,
				petDetail: action.payload,
			}
		// SEARCHER FILTERS
		case BREED_FILTER:
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.breeds.primary === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Raza').length < 1 ? [...state.filterActive, 'Raza'] : state.filterActive
			}
		case AGE_FILTER:
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.age === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Edad').length < 1 ? [...state.filterActive, 'Edad'] : state.filterActive
			}
		case SIZE_FILTER:
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.size === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Tamaño').length < 1 ? [...state.filterActive, 'Tamaño'] : state.filterActive
			}
		case GENRE_FILTER:
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.gender === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Sexo').length < 1 ? [...state.filterActive, 'Sexo'] : state.filterActive
			}
		// RESET FILTERS
		case RESET_PET_ORDER:
			return {
				...state,
				petsFiltered: state.allPets,
				filterActive: state.filterActive.filter(e => e !== action.payload)
			}
		case TYPE_FILTER:
			return {
				...state,
				petsFiltered: action.payload
			}
		case RESET_PET_DETAIL:
			return{
				...state,
				petDetail: action.payload,
			}
		default:
			return state;
	}
}
