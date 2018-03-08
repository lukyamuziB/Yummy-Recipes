import axios from 'axios';

const ROOT_URL = 'http://127.0.0.1:5000/api';


export const REGISTER_USER = 'register_user';
export const CREATE_CATEGORIES = 'create_categories';


export default  function registerUser(values, callback){
    const request = axios.post(`${ROOT_URL}/auth/register`, values)
    .then(() => callback());

    return {
        type: REGISTER_USER,
        payload: request
    };
}

