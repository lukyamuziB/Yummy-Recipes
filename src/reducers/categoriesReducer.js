import _ from 'lodash';

import * as types from '../actions/actionTypes';

export default function(state=[], action){
    console.log("action payload here...")
    // console.log(action.payload.data)
    switch(action.type){
        case types.FETCH_CATEGORIES:
            console.log("hgvghascvghvhjc", action.payload)
            return action.payload;
        default:
            return state;
    }
}

