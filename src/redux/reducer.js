import { } from './actions';
import { BREED_FILTER, RESET_PET_ORDER } from './breedFilterAction';
import {TYPE_FILTER} from '../redux/actions'

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
		case 'GET_ALL_PETS':
			return {
				...state,
				allPets: action.payload,
				petsFiltered: action.payload,
			}
		case 'GET_DETAIL':
			return {
				...state,
				detail: action.payload,
			}
		case 'BREED_FILTER':
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.breeds.primary === action.payload),
				filterActive: [...state.filterActive, 'Raza']
			}
		case 'AGE_FILTER':
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.age === action.payload),
				filterActive: [...state.filterActive, 'Edad']
			}
		case 'SIZE_FILTER':
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.size === action.payload),
				filterActive: [...state.filterActive, 'Tamaño']
			}
		case 'GENRE_FILTER':
			return {
				...state,
				petsFiltered: state.allPets.filter(e => e.gender === action.payload),
				filterActive: [...state.filterActive, 'Sexo']
			}
		case 'RESET_PET_ORDER':
			return {
				...state,
				petsFiltered: state.allPets,
				filterActive: state.filterActive.filter(e => e === action.payload)
			}
		case TYPE_FILTER:
			return {
				...state,
				petsFiltered: action.payload
			}
		default:
			return state;
	}

}
