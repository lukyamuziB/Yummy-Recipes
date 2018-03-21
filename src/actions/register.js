import axios from 'axios';
import toastr from 'toastr';

import { ROOT_URL } from '../index';
import * as types from './actionTypes';

export function registerSuccessful(values) {
  return {
    type: types.REGISTER_USER,
    payload: values,
  };
}

export function registerFailed(values) {
  return {
    type: types.REGISTER_USER_FAILED,
    payload: values,
  };
}

export default function registerUser(values) {
  return function (dispatch) {
    return axios.post(`${ROOT_URL}/auth/register`, values)
      .then((response) => {
        toastr.success(response.response.data.Message);
        dispatch(registerSuccessful(response));
      })
      .catch((error) => {
        if (error.response) {
          toastr.info(error.response.data.Error);
          dispatch(registerFailed(error));
          throw (error);
        }
      });
  };
}
