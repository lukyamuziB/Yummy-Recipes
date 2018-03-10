import * as types from '../actions/actionTypes';

export default function loginReducer(state = {}, action) {
    switch (action.type) {
      case types.FAILED_LOGIN:
        return {
          ...state.message,
          message: action.message,
        };
      case types.SUCCESSFUL_LOGIN:
        return {
          ...state.message,
          message: action.message,
        };
      default:
        return state;
    }
  }