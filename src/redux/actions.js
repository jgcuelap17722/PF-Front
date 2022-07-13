import axios from 'axios'
import { InfoApi } from "../assets/dataMockups/InfoApi.js";
import { user } from '../assets/dataMockups/user.js'
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
export const SHELTER_FILTE = 'SHELTER_FILTE'


export const TYPE_FILTER = 'TYPE_FILTER'
export const RESET_PET_DETAIL = 'RESET_PET_DETAIL'
export const GET_ALL_PETS = 'GET_ALL_PETS'
export const GET_DETAIL = 'GET_DETAIL'
export const RESET_FILTER_CARD = 'RESET_FILTER_CARD'
export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_CITIES_BY_COUNTRY = 'GET_CITIES_BY_COUNTRY';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const RESET_NEW_USER = 'RESET_NEW_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const RESET_USER_LOGGED = 'RESET_USER_LOGGED';
export const CITY_FILTER = 'CITY_FILTER'
export const RESET_SEARCH = 'RESET_SEARCH'


export function getAllPets() {
    return async function (dispatch) {
        // var json = await axios.get('http://localhost:3001');
        return dispatch({
            type: GET_ALL_PETS,
            payload: InfoApi
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        var pets = await axios.get('https://pf-api-pets.herokuapp.com/api/v1.0/deploy');
        const filter = pets.data.animals.filter(el => el.id == id)
        return dispatch({

            type: 'GET_DETAIL',
            payload: filter

        })
    }
}

export const breedFilter = (value) => {
    console.log('action breed', value);
    return {
        type: BREED_FILTER,
        payload: value
    }
}

export const ageFilter = (value) => {
    console.log('action breed', value);
    return {
        type: AGE_FILTER,
        payload: value
    }
}

export const sizeFilter = (value) => {
    console.log('action breed', value);
    return {
        type: SIZE_FILTER,
        payload: value
    }
}

export const genreFilter = (value) => {
    console.log('action breed', value);
    return {
        type: GENRE_FILTER,
        payload: value
    }
}

export const environmentFilter = (value) => {
    console.log('action environment', value);
    return {
        type: ENVIRONMENT_FILTER,
        payload: value
    }
}
export const coatFilter = (value) => {
    console.log('action coat', value);
    return {
        type: COAT_FILTER,
        payload: value
    }
}
export const colorFilter = (value) => {
    console.log('action coat', value);
    return {
        type: COLOR_FILTER,
        payload: value
    }
}
export const attributesFilter = (value) => {
    console.log('action coat', value);
    return {
        type: ATTRIBUTES_FILTER,
        payload: value
    }
}
export const daysFilter = (value) => {
    console.log('action coat', value);
    return {
        type: DAYS_FILTER,
        payload: value
    }
}

export const resetPetOrder = (orderType) => {
    console.log('action breed', orderType);
    return {
        type: RESET_PET_ORDER,
        payload: orderType
    }
}

export const typeFilter = (type) => {
    console.log('action', type);
    let url = 'https://pf-api-pets.herokuapp.com/api/v1.0/deploy'

    return async function (dispatch) {
        try {
            let response = await axios.get(url);
            const data = response.data.animals
            // console.log(data)
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
    let url = 'https://pf-api-pets.herokuapp.com/api/v1.0/deploy'
    return async function (dispatch) {
        return await fetch(url)
            .then(res => res.json())
            .then(json => {
                let filtered = json.animals.filter(el => el.contact.address.city.toLowerCase() === obj.city)
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

export function resetPetDetail() {
    return { type: 'RESET_PET_DETAIL', payload: {} }
}

export function getUserInfo() {
    return async function (dispatch) {
        // var user = await axios.get('https://api-rest-adoptame.herokuapp.com/api/v1.0/user/{id}');
        return dispatch({
            type: 'GET_USER_INFO',
            payload: user[0],

        })
    }
}


export function getCountries() {
    const url = 'https://api-rest-adoptame.herokuapp.com/api/v1.0/countries';
    return async function (dispatch) {
        return await fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: GET_COUNTRIES, payload: data })
            })
    }
}

export function getCitiesByCountry(id) {
    const url = `https://api-rest-adoptame.herokuapp.com/api/v1.0/cities/${id}`;
    return async function (dispatch) {
        return await fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: GET_CITIES_BY_COUNTRY, payload: data })
            })

    }

}

export function createNewUser(obj) {

    const url = 'https://api-rest-adoptame.herokuapp.com/api/v1.0/user';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(obj)
    }

    return async function (dispatch) {

        return await fetch(url, options)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: CREATE_NEW_USER, payload: data })
            })
    }
}

export function resetNewUser() {
    return { type: RESET_NEW_USER, payload: {} }
}


export function loginUser(obj) {

    const url = 'https://api-rest-adoptame.herokuapp.com/api/v1.0/auth/userLogin';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(obj)
    }

    return async function (dispatch) {

        return await fetch(url, options)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: LOGIN_USER, payload: data })
            })
    }
}

export function resetUserLogged() {
    return { type: RESET_USER_LOGGED, payload: {} }
}

