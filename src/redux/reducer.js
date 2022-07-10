import { GET_COUNTRIES,
		 GET_CITIES_BY_COUNTRY,
		 CREATE_NEW_USER,
		 RESET_NEW_USER } from './actions';

const initialState = {
	allPets: [],
	petDetail: {},
	petsFiltered: [],
	newUser: {},
	userDetail: {},
	userLogged: {},
	countries: [],
	citiesByCountry: []
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
			return{
				...state,
				detail:action.payload,
			}

		case GET_COUNTRIES:
			return{
				...state,
				countries: action.payload
			}

		case GET_CITIES_BY_COUNTRY:
			return{
				...state,
				citiesByCountry: action.payload
			}

		case CREATE_NEW_USER:
			return{
				...state,
				newUser: action.payload
			}

		case RESET_NEW_USER:
			return{
				...state,
				newUser: action.payload
			}			

		default:
			return state;
	}

}
