import axios from 'axios';
import toastr from 'toastr';

import {ROOT_URL} from '../index';
import * as types from './actionTypes';

export default  function registerUser(values, callback){
    const request = axios.post(`${ROOT_URL}/auth/register`, values)
    .then(() => callback())
    .catch(xhr=>{
        console.log(xhr.response.data.Error)
        toastr.success(xhr.response.data.Error)

    });

    return {
        type: types.REGISTER_USER,
        payload: request
    };
}

