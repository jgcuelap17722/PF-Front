import {

	RESET_FILTER_CARD,
	GET_USER_INFO,
	GET_COUNTRIES,
	GET_CITIES_BY_COUNTRY,
	CREATE_NEW_USER,
	RESET_NEW_USER,
	LOGIN_USER,
	RESET_USER_LOGGED,
} from './actions';

const initialState = {
	newUser: {},
	userDetail: {},
	userLogged: {},
	countries: [],
	citiesByCountry: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case RESET_FILTER_CARD:
			return {
				...state,
				filterActive: []
			}
		case GET_USER_INFO:
			return {
				...state,
				userDetail: action.payload,
			}

		case GET_COUNTRIES:
			return {
				...state,
				countries: action.payload
			}

		case GET_CITIES_BY_COUNTRY:
			return {
				...state,
				citiesByCountry: action.payload
			}

		case CREATE_NEW_USER:
			return {
				...state,
				newUser: action.payload
			}

		case RESET_NEW_USER:
			return {
				...state,
				newUser: action.payload
			}
		case LOGIN_USER:
			return {
				...state,
				userLogged: action.payload
			}
		case RESET_USER_LOGGED:
			return {
				...state,
				userLogged: action.payload
			}

		default:
			return state;
	}
}
