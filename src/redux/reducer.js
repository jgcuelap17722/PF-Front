import {
	GET_USER_INFO,
	GET_COUNTRIES,
	GET_CITIES_BY_COUNTRY,
	CREATE_NEW_USER,
	RESET_NEW_USER,
	LOGIN_USER,
	RESET_USER_LOGGED,
	PATCH_USER,
	CONFIRM_EMAIL,
	EMAIL_CONFIRMED,
	PW_RESET,
	PW_CHANGE,
	POST_PAY,
	GET_DONATIONS,
	GET_ALL_PETS_BY_USER,
	RESET_DASHBOARD_PETS,
	POST_REVIEW,
	RESET_POST_REVIEW,
	GET_REVIEW,
	POST_ADOPTER_PROFILE,
	RESET_ADOPTER_PROFILE,
} from './actions';

const initialState = {
	newUser: {},
	userDetail: {},
	userLogged: {},
	countries: [],
	citiesByCountry: [],
	pay: [],
	patch:{},
	emailConfirmSended: {},
	emailConfirmed: {},
	pwReset:{},
	pwChange:{},
	donations:[],
	allPetsByUser: [],
	review:[],
	allPetsByUser:[],
	adopterProfile:{},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {

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

		case PATCH_USER:
		return{
			...state,
			patch: action.payload,
		}

		case CONFIRM_EMAIL:
		return {
			...state,
			emailConfirmSended: action.payload
		}
		case EMAIL_CONFIRMED:
		return{
			...state,
			emailConfirmed: action.payload
		}

		case PW_RESET:
		return {
			...state,
			pwReset: action.payload
		}

		case PW_CHANGE:
		return {
			...state,
			pwChange: action.payload
		}

		case PATCH_USER:
			return {
				...state,
				patch: action.payload,
			}

		case CONFIRM_EMAIL:
			return {
				...state,
				emailConfirmed: action.payload
			}

		case POST_PAY:
			return{
				...state,
				pay: action.payload
			}
		case GET_DONATIONS:
			return{
				...state,
				donations:action.payload
			}
		case GET_ALL_PETS_BY_USER:
			return{
				...state,
				allPetsByUser: action.payload
			}
		case RESET_DASHBOARD_PETS:
			return{
				...state,
				allPetsByUser: action.payload
			}
		case POST_REVIEW:
			return{
				...state
			}
		case RESET_POST_REVIEW:
			return{
				...state,
				review: action.payload
			}
		case GET_REVIEW:
			return{
				...state,
				review: action.payload
			}
		case POST_ADOPTER_PROFILE:
			return{
				...state,
				adopterProfile: action.payload
			}
		case RESET_ADOPTER_PROFILE:
			return{
				...state,
				adopterProfile: action.payload
			}
		default:
		return state;
	}
}
