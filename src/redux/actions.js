import axios from 'axios'
import { InfoApi } from "../assets/dataMockups/InfoApi.js";
export const GET_ALL_PETS = 'GET_ALL_PETS'
export const GET_DETAIL = 'GET_DETAIL'
export const BREED_FILTER = 'BREED_FILTER'
export const RESET_PET_ORDER = 'RESET_PET_ORDER'
export const AGE_FILTER = 'AGE_FILTER'
export const SIZE_FILTER = 'SIZE_FILTER'
export const GENRE_FILTER = 'GENRE_FILTER'
export const ENVIRONMENT_FILTER = 'ENVIRONMENT_FILTER'
export const COAT_FILTER = 'COAT_FILTER'
export const COLOR_FILTER = 'COAT_FILTER'
export const ATTRIBUTES_FILTER = 'ATTRIBUTES_FILTER'
export const DAYS_FILTER = 'DAYS_FILTER'
export const SHELTER_FILTER = 'DAYS_FILTER'
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

export function getDetail(id){
    return async function (dispatch){
        var pets = await axios.get('https://pf-api-pets.herokuapp.com/api/v1.0/deploy');
        // console.log(pets.data)
        const filter = pets.data.animals.filter(el => el.id == id)
        return dispatch({
            type:'GET_DETAIL',
            payload: filter
        })
    }
    }

// SEARCHER FILTERS

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

export const environmetFilter = (value) => {
    console.log(value);
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

// RESET FILTERS

export const resetPetOrder = (orderType)=>{
    return{
        type: RESET_PET_ORDER,
        payload: orderType
    }
}  

// TYPE FILTER
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
