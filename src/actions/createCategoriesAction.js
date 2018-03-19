import axios from 'axios';
import toastr from 'toastr';


import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';


const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function createSuccessful(values){
    return{
        type:types.CREATE_CATEGORIES_SUCCESS,
        payload:values
    }
}

export function createUnsuccessful(values){
    return{
        type:types.CREATE_CATEGORIES_FAILURE,
        payload:values
    }
}

export default  function createCategories(values){
    return function(dispatch){
        return axios.post(`${ROOT_URL}/categories`, values, {headers})
        .then((response) => {
            toastr.info("Category successfully created")
            dispatch(createSuccessful(response.data))
        })
        .catch((error) => {
            if(error.response){
            toastr.info(error.response.data.Error)
            dispatch(createUnsuccessful(error))
            throw(error)
            }
        })
    }
    
}

