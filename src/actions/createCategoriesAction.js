import axios from 'axios';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';


const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export default  function createCategories(values, callback){
    const request = axios.post(`${ROOT_URL}/categories`, values, {headers})
    .then(() => callback());
    return{
        type:types.CREATE_CATEGORIES_SUCCESS,
        payload:request.data
    }
}

