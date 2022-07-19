import axios from 'axios'
import { URL_POST_FAVS, 
         URL_GET_FAVS, 
         URL_DELETE_FAVS, 
         URL_GET_ALL_PETS, 
         URL_TYPE_FILTER, 
         URL_CITY_FILTER, 
         URL_GET_PET_DETAIL } from '../constants/endpoints/routes';
export const RESET_PET_ORDER = 'RESET_PET_ORDER'
export const BREED_FILTER = 'BREED_FILTER'
export const AGE_FILTER = 'AGE_FILTER'
export const SIZE_FILTER = 'SIZE_FILTER'
export const GENRE_FILTER = 'GENRE_FILTER'
export const ENVIRONMENT_FILTER = 'ENVIRONMENT_FILTER'
export const COAT_FILTER = 'COAT_FILTER'
export const COLOR_FILTER = 'COLOR_FILTER'
export const ATTRIBUTES_FILTER = 'ATTRIBUTES_FILTER'
export const DAYS_FILTER = 'DAYS_FILTER'
export const SHELTER_FILTER = 'SHELTER_FILTER'
export const CITY_FILTER = 'CITY_FILTER'
export const RESET_SEARCH = 'RESET_SEARCH'
export const TYPE_FILTER = 'TYPE_FILTER'
export const RESET_PET_DETAIL = 'RESET_PET_DETAIL'
export const GET_ALL_PETS = 'GET_ALL_PETS'
export const GET_DETAIL = 'GET_DETAIL'
const { REACT_APP_BACKEND_URL_TEST } = process.env;



export function getAllPets() {
  return async function (dispatch) {
      var json = await axios.get(`${REACT_APP_BACKEND_URL_TEST}/api/v1.0/pets`);
      return dispatch({
          type: GET_ALL_PETS,
          payload: json.data
      })
  }
}

export function getDetail(id) {
  return async function (dispatch) {
      var pet = await axios.get(`${REACT_APP_BACKEND_URL_TEST}/api/v1.0/pets/${id}`);
      return dispatch({

          type: 'GET_DETAIL',
          payload: pet.data

      })
  }
}

// SEARCHER FILTERS ------------------------------

export const breedFilter = (value) => {
  return {
      type: BREED_FILTER,
      payload: value
  }
}

export const ageFilter = (value) => {
  return {
      type: AGE_FILTER,
      payload: value
  }
}

export const sizeFilter = (value) => {
  return {
      type: SIZE_FILTER,
      payload: value
  }
}

export const genreFilter = (value) => {
  return {
      type: GENRE_FILTER,
      payload: value
  }
}

export const environmentFilter = (value) => {
  return {
      type: ENVIRONMENT_FILTER,
      payload: value
  }
}
export const coatFilter = (value) => {
  return {
      type: COAT_FILTER,
      payload: value
  }
}
export const colorFilter = (value) => {
  return {
      type: COLOR_FILTER,
      payload: value
  }
}
export const attributesFilter = (value) => {
  return {
      type: ATTRIBUTES_FILTER,
      payload: value
  }
}
export const daysFilter = (value) => {
  return {
      type: DAYS_FILTER,
      payload: value
  }
}

export const shelterFilter = (value)=>{
  return {
      type: SHELTER_FILTER,
      payload: value
  }
}

//------------------------------------------------


export const typeFilter = (type) => {

  return async function (dispatch) {
    try {
      let response = await axios.get(URL_TYPE_FILTER);
      const data = response.data
      const json = data.filter(e => e.type === type);
      return dispatch({
        type: TYPE_FILTER,
        payload: json,
      })
    } catch (error) {
      console.log(error);
    }
  }
}


export function cityFilter(obj) {
  return async function (dispatch) {
    return await fetch(URL_CITY_FILTER)
      .then(res => res.json())
      .then(json => {
        let filtered = json.filter(el => el.contact.address.city.toLowerCase() === obj.city)
        dispatch({ type: CITY_FILTER, payload: filtered })
      })
      .catch(error => console.log(error))
  }
}

export const resetSearch = () => {
  return {
      type: RESET_SEARCH,
  }
}

export const resetPetOrder = (orderType) => {
  return {
      type: RESET_PET_ORDER,
      payload: orderType
  }
}


export function resetPetDetail() {
  return { type: RESET_PET_DETAIL, payload: {} }
}
