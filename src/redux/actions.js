import axios from 'axios'
import { InfoApi } from "../assets/dataMockups/InfoApi.js";

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