import {reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import categoriesReducer from '../reducers/categoriesReducer';

const rootReducer = combineReducers({
    categories:categoriesReducer,
    form:formReducer
});

export default rootReducer;