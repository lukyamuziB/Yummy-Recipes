import axios from 'axios';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';


const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function createSuccessful(values){
    return{
        type:types.CREATE_CATEGORIES_SUCCESS,
        payload:values
    }
}

export default  function createCategories(values){
    return function(dispatch){
        return axios.post(`${ROOT_URL}/categories`, values, {headers})
        .then((response) => {
            dispatch(createSuccessful(response.data))
        })
    }
    
}

