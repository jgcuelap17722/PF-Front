import axios from 'axios'
export const GET_ALL_FOUNDATIONS = 'GET_ALL_FOUNDATIONS'
export const GET_ALL_FOUNDATION_PETS = 'GET_ALL_FOUNDATION_PETS'
export const RESET_FOUNDATIONS = 'RESET_FOUNDATIONS'
const { REACT_APP_BACKEND_URL_TEST } = process.env;


export function getAllFoundations() {
    return async function (dispatch) {
        var json = await axios.get(`${REACT_APP_BACKEND_URL_TEST}/api/v1.0/fundations`);
        return dispatch({
            type: GET_ALL_FOUNDATIONS,
            payload: json.data
        })
    }
}
export function getAllFoundationPets() {
    return async function (dispatch) {
        var json = await axios.get(`${REACT_APP_BACKEND_URL_TEST}/api/v1.0/pets/foundation`);
        return dispatch({
            type: GET_ALL_FOUNDATION_PETS,
            payload: json.data
        })
    }
}
export function resetFoundations() {
    return { type: RESET_FOUNDATIONS, payload: [] }
}