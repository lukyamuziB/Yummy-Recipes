import axios from 'axios';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';


const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};
const a = 9

export default  function editCategories(values, id, callback){
    const request = axios.put(`${ROOT_URL}/categories/${id}`, values, {headers})
    .then(() => callback());
    return {
        type:types.EDIT_SUCCESSFUL,
        payload: request
    }
}