import * as types from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
