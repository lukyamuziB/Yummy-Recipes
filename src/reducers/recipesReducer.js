import * as types from '../actions/actionTypes';

export default function(state=[], action){
    switch(action.type){
        case types.FETCH_RECIPES_SUCCESSFUL:
        console.log("nnnnnnnnnnn", action.payload)
            return action.payload;
        default:
            return state;
    }
}
