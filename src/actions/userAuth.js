import axios from 'axios';
import toastr from 'toastr'

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

  
export function login(values) {
    return function (dispatch) {
            return axios.post(`${ROOT_URL}/auth/login`, values)
            .then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('message', response.data.Message);
            dispatch(loginSuccess(response.data.token));
          }
        )
        .catch((xhr) => {
            dispatch(loginFails(xhr));
            throw (xhr);
        });
    
    };
  }

const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};

export function userLogout(){
    return function (dispatch){
      return axios.delete(`${ROOT_URL}/auth/logout`,{headers})
      .then((response) => {
        dispatch(logoutSuccessful(response.data.message))
      });
    };
  }