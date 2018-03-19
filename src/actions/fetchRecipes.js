import axios from 'axios';

import { ROOT_URL } from '../index';
import * as types from '../actions/actionTypes';

export function recipesExist(result) {
  return {
    type: types.FETCH_RECIPES_SUCCESSFUL,
    payload: result,
  };
}

export function recipesDontExist(result) {
  return {
    type: types.FETCH_RECIPES_UNSUCCESSFUL,
    payload: result,
  };
}

const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export function fetchRecipes(id) {
  return function (dispatch) {
    return axios.get(`${ROOT_URL}/categories/${id}`, { headers })
      .then((response) => {
        dispatch(recipesExist(response.data));
      })
      .catch((xhr) => {
        dispatch(recipesDontExist(xhr));
      });
  };
}
