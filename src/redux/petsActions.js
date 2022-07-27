import axios from 'axios'
import {
  URL_POST_FAVS,
  URL_GET_FAVS,
  URL_DELETE_FAVS,
  URL_GET_ALL_PETS,
  URL_TYPE_FILTER,
  URL_CITY_FILTER,
  URL_GET_PET_DETAIL,
  URL_GET_ALL_AND_FAVS
} from '../constants/endpoints/routes';
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
export const GET_FAV_PETS = 'GET_FAV_PETS'
export const POST_FAV_PET = 'POST_FAV_PET'
export const DELETE_FAV_PET = 'DELETE_FAV_PET'
export const GET_ALL_PETS_AND_FAVS = 'GET_ALL_PETS_AND_FAVS'
export const SEARCH_IN_FAVS = 'SEARCH_IN_FAVS'
export const UPDATE_PET_BY_ID = 'UPDATE_PET_BY_ID'
export const RESET_UPDATE_MSG = 'RESET_UPDATE_MSG'
export const GET_PET_DETAIL_FAV = 'GET_PET_DETAIL_FAV'
export const RESERT_SEARCH = 'RESERT_SEARCH'
export const DISABLE_PET = 'DISABLE_PET'
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

// FAVORITES

export const getPetFavs = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_GET_FAVS}${id}`)
    const data = response.data
    return dispatch({
      type: GET_FAV_PETS,
      payload: data
    })
  }
}

export const postFavPet = (data) => {
  return async function () {
    try {
      const response = await axios.post(`${URL_POST_FAVS}`, data)
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export const getPetFav=(userId, id)=>{
  console.log('action');
  return async function (dispatch) {
    const response = await axios.get(`${URL_GET_FAVS}${userId}`)
    const data = response.data
    const pet = data.filter(e => e.id == id)
    return dispatch({
      type: GET_PET_DETAIL_FAV,
      payload: pet
    })
  }
}

export const deletePetFav = ({ userId, petId }) => { //QUERY
  return async function () {
    try {
      const response = await axios.delete(`${URL_DELETE_FAVS}?userId=${userId}&petId=${petId}`)
      return response;
    } catch (error) {
      throw error
    }
  };
}

export const getAllPetsWithFavs = (userId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_GET_ALL_AND_FAVS}?userId=${userId}`)
      return dispatch({
        type: GET_ALL_PETS_AND_FAVS,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export const searchInFavs = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_GET_FAVS}${id}`)
    const data = response.data
    return dispatch({
      type: SEARCH_IN_FAVS,
      payload: data
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
  console.log('action', value);
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

export const shelterFilter = (value) => {
  return {
    type: SHELTER_FILTER,
    payload: value
  }
}

//------------------------------------------------


export const typeFilter = ({ petType, userId }) => {

  const url = userId ? `${URL_TYPE_FILTER}?userId=${userId}` : `${URL_TYPE_FILTER}`
  // console.log('url', url);
  return async function (dispatch) {
    try {
      let response = await axios.get(url);
      const data = response.data
      const json = data.filter(e => e.type === petType);
      return dispatch({
        type: TYPE_FILTER,
        payload: json,
      })
    } catch (error) {
      console.log(error);
    }
  }
}


export function cityFilter(location, userId) {
  const url = userId ? `${URL_CITY_FILTER}${location.locationType}=${location.value}&userId=${userId}` : `${URL_CITY_FILTER}${location.locationType}=${location.value}`
  return async function (dispatch) {
    return await fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: CITY_FILTER, payload: json })
      })
      .catch(error => console.log(error))
  }
}

export const resetSearch = () => {
  console.log('reset');
  return {
    type: RESET_SEARCH,
  }
}

export const resetPetOrder = (orderType = '1') => {
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
        return dispatch({ type: CREATE_NEW_PET, payload: data.data })
      })
      .catch(error => console.log(error))
  }
}

export function getBreedsByPetType(type) {
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/breed-pet/${type}`;
  return async function (dispatch) {
    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        return dispatch({ type: BREEDS_BY_PET_TYPE, payload: data })
      })
      .catch(error => console.log(error))
  }
}

export function getColorsByPetType(type) {
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/color-pet/${type}`;
  return async function (dispatch) {
    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        return dispatch({ type: COLORS_BY_PET_TYPE, payload: data })
      })
      .catch(error => console.log(error))
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

export function disablePet(obj, id, token){
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/pets/${id}`;
  const options = {
    headers: { 'authorization': token }
  }
   return async function (dispatch) {
    return await axios.patch(url, obj, options)
      .then(data => {
        console.log(data)
        return dispatch({type: DISABLE_PET, payload: data.data})
      })
      .catch(error =>  console.log(error))
  }
}

export function createNewPetAuth0(obj, token){
  const url = `${REACT_APP_BACKEND_URL_TEST}/api/v1.0/pets`;
  const options = {
    headers: { Authorization: `Bearer ${token}`, auth0: true},
  }

  return async function (dispatch) {
    return await axios.post(url, obj, options)
      .then(data => {
        return dispatch({ type: CREATE_NEW_PET, payload: data.data })
      })
      .catch(error => console.log(error))
  }
}