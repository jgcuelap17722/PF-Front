import axios from 'axios'
import { InfoApi } from "../assets/dataMockups/InfoApi.js";

export  function getAllPets(){
    return async function (dispatch){
        // console.log(InfoApi)
        // var json = await axios.get('http://localhost:3001');
        return dispatch({
            type:'GET_ALL_PETS',
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