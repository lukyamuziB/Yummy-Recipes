import axios from 'axios';
import toastr from 'toastr';


import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';


const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function editSuccessful(values){
    return {
        type:types.EDIT_SUCCESSFUL,
        payload: values
    }
}

export function editUnsuccessful(values){
    return {
        type:types.EDIT_UNSUCCESSFUL,
        payload: values
    }
}


export  function editCategories(values, id){
    return function(dispatch){
        return axios.put(`${ROOT_URL}/categories/${id}`, values, {headers})
        .then((response) => {
            // console.log("Successfully updated category")
            toastr.info("Successfully updated category")
            dispatch(editSuccessful(response.data));
        })
        .catch((error) => {
            if(error.response){
                toastr.info(error.response.data.Error)
                dispatch(editUnsuccessful(error))
                throw(error)
            }
            
        });
        
    }
}