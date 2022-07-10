import axios from 'axios'
import { InfoApi } from "../assets/dataMockups/InfoApi.js";
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_CITIES_BY_COUNTRY = 'GET_CITIES_BY_COUNTRY';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const RESET_NEW_USER = 'RESET_NEW_USER';

export  function getAllPets(){
        return async function (dispatch){
            // var json = await axios.get('http://localhost:3001');
            return dispatch({
                type:'GET_ALL_PETS',
                payload: InfoApi
            })
        }
    }

export function getDetail(){
    return async function (dispatch){
        // var json = await axios.get('http://localhost:3001');
        return dispatch({
            type:'GET_DETAIL',
            payload: InfoApi
        })
    }
}

export function getCountries(){

    const url = 'http://localhost:5000/api/v1.0/countries';

    return async function(dispatch){

        return await fetch(url)
            .then( response => response.json() )
            .then( data => {
                dispatch({type: GET_COUNTRIES, payload: data})
            })
    }
}

export function getCitiesByCountry(id){

    const url = `http://localhost:5000/api/v1.0/cities/${id}`;

    return async function(dispatch){

        return await fetch(url)
            .then( response => response.json() )
            .then( data => {
                dispatch({type: GET_CITIES_BY_COUNTRY, payload: data})
            })

    }

}

export function createNewUser(obj){

    const url = 'http://localhost:5000/api/v1.0/user';
    const options = {
       method: 'POST',
       headers: {'Content-Type' : 'Application/json'},
        body: JSON.stringify(obj)
    }

    return async function(dispatch){

        return await fetch(url, options)
            .then( response => response.json() )
            .then( data => {
                dispatch({type: CREATE_NEW_USER, payload: data })
            })
    }
}

export function resetNewUser(){
    return {type: RESET_NEW_USER, payload: {}}
}