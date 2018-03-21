import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import categoriesReducer from '../reducers/categoriesReducer';
import recipesReducer from '../reducers/recipesReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  categories: categoriesReducer,
  form: formReducer,
});

export default rootReducer;
