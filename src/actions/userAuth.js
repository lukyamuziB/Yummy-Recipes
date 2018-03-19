import axios from 'axios';
import toastr from 'toastr';

import {ROOT_URL} from '../index';
import * as types from './actionTypes';


export function loginFails(result) {
    return { type: types.FAILED_LOGIN, result };
  }

export function loginSuccess(result) {
    return { type: types.SUCCESSFUL_LOGIN, result };
  }

export function logoutSuccessful(result){
  return {
    type: types.SUCCESSFUL_LOGOUT, result
  }
}

  
export const login = (values) => {
    return function (dispatch) {
            return axios.post(`${ROOT_URL}/auth/login`, values)
            .then((response) => {
             localStorage.clear()
             localStorage.setItem('token', response.data.token);
             toastr.info(response.response.data.Message, {timeOut: 3000})
            dispatch(loginSuccess(response.data.token));
          }
        )
        .catch((error) => {
          if(error.response){
            toastr.info(error.response.data.Error)
            dispatch(loginFails(error))
            throw(error)
        }
      });
    };
  }

const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function userLogout(){
    return function (dispatch){
      return axios.delete(`${ROOT_URL}/auth/logout`,{headers})
      .then((response) => {
        toastr.info("successfully loged out", {timeOut: 3000})
        dispatch(logoutSuccessful(response.data.message))
      });
    };
  }