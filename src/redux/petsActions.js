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
export const CREATE_NEW_PET = 'CREATE_NEW_PET'
export const BREEDS_BY_PET_TYPE = 'BREEDS_BY_PET_TYPE'
export const COLORS_BY_PET_TYPE = 'COLORS_BY_PET_TYPE'
export const UPDATE_PET_BY_ID = 'UPDATE_PET_BY_ID'
export const RESET_UPDATE_MSG = 'RESET_UPDATE_MSG'
const { REACT_APP_BACKEND_URL_TEST } = process.env;



export function getAllPets() {
  return async function (dispatch) {
      var json = await axios.get(URL_GET_ALL_PETS);
      return dispatch({
          type: GET_ALL_PETS,
          payload: json.data
      })
  }
}

export function getDetail(id) {
  return async function (dispatch) {
      var pet = await axios.get(`${URL_GET_PET_DETAIL}${id}`);
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

// ------------------- CRUD -------------------------

export function createNewPet(obj, token){
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/pets`;
  const options = {
    headers: { Authorization: `Bearer ${token}`},
  }

  return async function (dispatch) {
    return await axios.post(url, obj, options)
      .then(data => {
        return dispatch({type: CREATE_NEW_PET, payload: data.data})
      })
      .catch(error =>  console.log(error))
  }
}

export function getBreedsByPetType(type){
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/breed-pet/${type}`;
  return async function (dispatch) {
    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        return dispatch({type: BREEDS_BY_PET_TYPE, payload: data})
      })
      .catch(error =>  console.log(error))
  }
}

export function getColorsByPetType(type){
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/color-pet/${type}`;
  return async function (dispatch) {
    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        return dispatch({type: COLORS_BY_PET_TYPE, payload: data})
      })
      .catch(error =>  console.log(error))
  }
}

export function updatePetById(obj, id, token){
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/pets/${id}`;
  const options = {
    headers: { 'authorization': token }
  }
   return async function (dispatch) {
    return await axios.put(url, obj, options)
      .then(data => {
        return dispatch({type: UPDATE_PET_BY_ID, payload: data.data})
      })
      .catch(error =>  console.log(error))
  }

}

export function resetUpdateMsg(){
  return { type: RESET_UPDATE_MSG, payload: {}}
}