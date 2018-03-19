import axios from 'axios';
import toastr from 'toastr';

import {ROOT_URL} from '../index';
import * as types from '../actions/actionTypes';

const headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};


export function deleteSuccessful(values){
    return{
        type:types.DELETE_SUCCESSFUL,
        payload:values
    }
}


export default function deleteCategory(id){
    return function(dispatch){
        return axios.delete(`${ROOT_URL}/categories/${id}`, {headers})
        .then((response) => {
            toastr.info("Category Successfully deleted")
            dispatch(deleteSuccessful(response.data))
        })
    }
}
