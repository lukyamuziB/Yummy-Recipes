import axios from 'axios';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';

const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function createRecipeSuccessful(values){
    return{
        type:types.CREATE_RECIPES_SUCCESS,
        payload:values
    }
}

export function createRecipes(values){
    return function(dispatch){
        return axios.post(`${ROOT_URL}/recipes`, values, {headers})
        .then((response) => {
            dispatch(createRecipeSuccessful(response.data))
        })
    }
}
