import axios from 'axios'
import { InfoApi } from "../assets/dataMockups/InfoApi.js";
export const BREED_FILTER = 'BREED_FILTER'
export const RESET_PET_ORDER = 'RESET_PET_ORDER'
export const AGE_FILTER = 'AGE_FILTER'
export const SIZE_FILTER = 'SIZE_FILTER'
export const GENRE_FILTER = 'GENRE_FILTER'
export const TYPE_FILTER = 'TYPE_FILTER'
export const RESET_PET_DETAIL = 'RESET_PET_DETAIL'
export const GET_ALL_PETS = 'GET_ALL_PETS'
export const GET_DETAIL = 'GET_DETAIL'
export const RESET_FILTER_CARD = 'RESET_FILTER_CARD'


export function getAllPets() {
    return async function (dispatch) {
        // var json = await axios.get('http://localhost:3001');
        return dispatch({
            type: GET_ALL_PETS,
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

export const resetFilterCard = ()=>{
    return{
        type: RESET_FILTER_CARD
    }
}

export const typeFilter = (type)=>{
    let url = 'https://pf-api-pets.herokuapp.com/api/v1.0/deploy'

    return async function (dispatch){
        try {
            let response = await axios.get(url);
            const data = response.data.animals
            const json = data.filter(e => e.type === type);
            return dispatch ({
            type: TYPE_FILTER,
            payload: json,
            })
        } catch (error) {
            console.log(error);
        }
    } 
}

export function resetPetDetail(){
    return {type: 'RESET_PET_DETAIL', payload: {}}
}