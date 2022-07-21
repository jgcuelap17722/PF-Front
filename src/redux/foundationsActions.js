import axios from 'axios'
export const GET_ALL_FOUNDATIONS = 'GET_ALL_FOUNDATIONS'
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