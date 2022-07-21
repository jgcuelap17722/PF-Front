import {
	GET_ALL_FOUNDATIONS,
	GET_ALL_FOUNDATION_PETS,
	RESET_FOUNDATIONS,
} from './foundationsActions';


const initialState = {
	allFoundations: [],
	allFoundationPets: [],
};

import React from 'react'

export default function foundationsReducer(state = initialState, action) {
    switch (action.type) {
		case GET_ALL_FOUNDATIONS:
			return {
				...state,
				allFoundations: action.payload,
			}
		case GET_ALL_FOUNDATION_PETS:
			return {
				...state,
				allFoundationPets: action.payload,
			}
		case RESET_FOUNDATIONS:
			return {
				...state,
				allFoundationPets: action.payload,
			}
        default:
			return state;
	}
}
