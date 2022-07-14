import axios from 'axios'
import { user } from '../assets/dataMockups/user.js'

export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_CITIES_BY_COUNTRY = 'GET_CITIES_BY_COUNTRY';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const RESET_NEW_USER = 'RESET_NEW_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const RESET_USER_LOGGED = 'RESET_USER_LOGGED';




export function getUserInfo(id, token) {
    
        const url = `https://api-rest-adoptame.herokuapp.com/api/v1.0/user/${id}`
        const options = {
            method: 'GET',
            headers: { 'authorization': token },
        }
        return async function (dispatch) {

            return await fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    dispatch({ type: GET_USER_INFO, payload: data })
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

