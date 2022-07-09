import { } from './actions';

const initialState = {
	allPets: [],
	petDetail: {},
	petsFiltered: [],
	newUser: {},
	userDetail: {},
	userLogged: {},
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
		default:
			return state;
	}

}
