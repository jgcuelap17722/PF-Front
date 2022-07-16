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
	PW_RESET,
	PW_CHANGE
} from './actions';

const initialState = {
	newUser: {},
	userDetail: {},
	userLogged: {},
	countries: [],
	citiesByCountry: [],
	patch:{},
	emailConfirmed: {},
	pwReset:{},
	pwChange:{}
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

		default:
			return state;
	}
}
