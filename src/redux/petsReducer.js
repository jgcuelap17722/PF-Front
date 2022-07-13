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
	ENVIRONMENT_FILTER,
	COAT_FILTER,
	COLOR_FILTER,
	ATTRIBUTES_FILTER,
	DAYS_FILTER,
	SHELTER_FILTER,
	CITY_FILTER,
	RESET_SEARCH,
} from './actions';


const initialState = {
	allPets: [],
	petDetail: {},
	petsAvailables: [],
	petsFiltered: [],
	filterActive: [],
	filterDisplayed: []
};

export default function petsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PETS:
			return {
				...state,
				allPets: action.payload,
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
				petsFiltered: state.filterActive.filter(e => e === "Raza").length > 0 ? state.petsAvailables.filter(e => e.breeds.primary === action.payload) : state.petsFiltered.filter(e => e.breeds.primary === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Raza').length < 1 ? [...state.filterActive, 'Raza'] : state.filterActive
				// filterActive: ['Raza']
			}
		case AGE_FILTER:
			return {
				...state,
				petsFiltered: state.filterActive[0] === 'Edad' ? state.petsAvailables.filter(e => e.age === action.payload) : state.petsFiltered.filter(e => e.age === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Edad').length < 1 ? [...state.filterActive, 'Edad'] : state.filterActive
				// filterActive: ['Edad']
			}
		case SIZE_FILTER:
			return {
				...state,
				petsFiltered: state.filterActive[0] === 'Tamaño' ? state.petsAvailables.filter(e => e.size === action.payload) : state.petsFiltered.filter(e => e.size === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Tamaño').length < 1 ? [...state.filterActive, 'Tamaño'] : state.filterActive
				// filterActive: ['Tamaño']
			}
		case GENRE_FILTER:
			return {
				...state,
				petsFiltered: state.filterActive.filter(e => e === "Sexo").length ? state.petsAvailables.filter(e => e.gender === action.payload) : state.petsFiltered.filter(e => e.gender === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Sexo').length < 1 ? [...state.filterActive, 'Sexo'] : state.filterActive
			}

		case ENVIRONMENT_FILTER:
			return {
				...state,
				petsFiltered: state.filterActive[0] === 'Afinidad con' ? state.petsAvailables.filter(e => e.environment[`${action.payload}`] === true) : state.petsFiltered.filter(e => e.environment[`${action.payload}`] === true),
				filterActive: state.filterActive.filter(e => e === 'Afinidad Con').length < 1 ? [...state.filterActive, 'Afinidad Con'] : state.filterActive

			}

		case COAT_FILTER:
			return {
				...state,
				petsFiltered: state.filterActive.filter(e => e === "Pelaje").length ? state.petsAvailables.filter(e => e.coat === action.payload) : state.petsFiltered.filter(e => e.coat === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Pelaje').length < 1 ? [...state.filterActive, 'Pelaje'] : state.filterActive
			}

		case COLOR_FILTER:
			return {
				...state,
				petsFiltered: state.filterActive.filter(e => e === "Color").length ? state.petsAvailables.filter(e => e.colors.primary === action.payload) : state.petsFiltered.filter(e => e.colors.primary === action.payload),
				filterActive: state.filterActive.filter(e => e === 'Color').length < 1 ? [...state.filterActive, 'Color'] : state.filterActive
			}
		case ATTRIBUTES_FILTER:
			return {
				...state,
				petsFiltered: state.filterActive.filter(e => e === "Cuidado y Comportamiento").length ? state.petsAvailables.filter(e => e.attributes[`${action.payload}`] === true) : state.petsFiltered.filter(e => e.attributes[`${action.payload}`] === true),
				filterActive: state.filterActive.filter(e => e === 'Cuidado y Comportamiento').length < 1 ? [...state.filterActive, 'Cuidado y Comportamiento'] : state.filterActive
			}
		case DAYS_FILTER: 
			return{
				...state
			}
		

		// RESET FILTERS
		case RESET_PET_ORDER:
			return {
				...state,
				petsFiltered: state.petsAvailables,
				filterActive: []
			}

		// GETS BY CITY OR TYPE
		case TYPE_FILTER:
			return {
				...state,
				petsAvailables: action.payload,
				petsFiltered: action.payload
			}
		case CITY_FILTER:
			return {
				...state,
				petsAvailables: action.payload,
				petsFiltered: action.payload
			}
		case RESET_PET_DETAIL:
			return {
				...state,
				petDetail: action.payload,
			}
		case RESET_SEARCH:
			return {
				...state,
				petsAvailables: [],
				petsFiltered: [],
				filteredByCity: []
			}

		default:
			return state;
	}
}