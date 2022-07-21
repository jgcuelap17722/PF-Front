import {
	GET_ALL_FOUNDATIONS,
} from './foundationsActions';


const initialState = {
	allFoundations: []
};

import React from 'react'

export default function foundationsReducer(state = initialState, action) {
    switch (action.type) {
		case GET_ALL_FOUNDATIONS:
			return {
				...state,
				allFoundations: action.payload,
			}
        default:
			return state;
	}
}
