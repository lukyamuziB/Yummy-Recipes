import axios from 'axios';


import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';


const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function editSuccessful(values){
    return {
        type:types.EDIT_SUCCESSFUL,
        payload: values
    }
}


export  function editCategories(values, id){
    
    return function(dispatch){
        return axios.put(`${ROOT_URL}/categories/${id}`, values, {headers})
        .then((response) => {
            dispatch(editSuccessful(response.data));
        });
        
    }
    // const request = axios.put(`${ROOT_URL}/categories/${id}`, values, {headers});
    // return {
    //     type:types.EDIT_SUCCESSFUL,
    //     payload: request
    // }
}