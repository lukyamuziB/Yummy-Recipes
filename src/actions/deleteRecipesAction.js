import axios from 'axios';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';

const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};


export function deleteRecipeSuccessful(values){
    return{
        type:types.DELETE_RECIPE_SUCCESSFUL,
        payload:values
    }
}


export default function deleteRecipe(id){
    return function(dispatch){
        return axios.delete(`${ROOT_URL}/recipes/${id}`, {headers})
        .then((response) => {
            dispatch(deleteRecipeSuccessful(response.data))
        })
    }
}
