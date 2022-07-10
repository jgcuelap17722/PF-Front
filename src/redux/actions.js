import axios from 'axios'
import { InfoApi } from "../assets/dataMockups/InfoApi.js";
export const BREED_FILTER = 'BREED_FILTER'
export const RESET_PET_ORDER = 'RESET_PET_ORDER'
export const AGE_FILTER = 'AGE_FILTER'
export const SIZE_FILTER = 'SIZE_FILTER'
export const GENRE_FILTER = 'GENRE_FILTER'
export const TYPE_FILTER = 'TYPE_FILTER'

export function getAllPets() {
    return async function (dispatch) {
        // var json = await axios.get('http://localhost:3001');
        return dispatch({
            type: 'GET_ALL_PETS',
            payload: InfoApi
        })
    }
}

export function getDetail() {
    return async function (dispatch) {
        // var json = await axios.get('http://localhost:3001');
        return dispatch({
            type: 'GET_DETAIL',
            payload: InfoApi
        })
    }
}


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
    console.log('agee', value);
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

export const resetPetOrder = (orderType)=>{
    return{
        type: RESET_PET_ORDER,
        payload: orderType
    }
}  
export const typeFilter = (type)=>{
    //let url = 'https://api-rest-adoptame.herokuapp.com/api/v1.0/pets/'
    let url = InfoApi 
    return async function (dispatch){
        let json = await axios.get(url);
        json = json.filter(e => e.type === type);
        return dispatch ({
        type: TYPE_FILTER,
        payload: json,
        })
    } 
}
