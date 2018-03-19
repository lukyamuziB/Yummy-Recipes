import axios from 'axios';
import toastr from 'toastr';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';

const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function createRecipeSuccessful(values){
    return{
        type:types.CREATE_RECIPES_SUCCESS,
        payload:values
    }
}

export function createRecipeUnSuccessful(values){
    return{
        type:types.CREATE_RECIPES_UNSUCCESS,
        payload:values
    }
}

export function createRecipes(values){
    return function(dispatch){
        return axios.post(`${ROOT_URL}/recipes`, values, {headers})
        .then((response) => {
            toastr.info("Recipe successfully created")
            dispatch(createRecipeSuccessful(response.data))
        })
        .catch((error) => {
            toastr.info(error.response.data.Error)
            dispatch(createRecipeUnSuccessful(error))
            throw(error)
        })
    }
}
