import axios from 'axios';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';

export function categoriesDontExist(result) {
    return {
        type:types.NO_CATEGORIES,
        result
    }
}

export function categoriesExist(result){
    return {
        type:types.FETCH_CATEGORIES,
        payload:result
    }
}

const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function fetchCategories(params=''){
    
    return function(dispatch){
        return axios.get(`${ROOT_URL}/categories${params}`, {headers})
        .then((response) => {
            dispatch(categoriesExist(response.data))
        })
        .catch((xhr) => {
            dispatch(categoriesDontExist(xhr))
        });
    };
}