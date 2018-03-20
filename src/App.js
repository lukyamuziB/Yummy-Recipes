import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingPage from './components/landingPage';
import Login from './components/loginUser';
import Register from './components/registerUser';
import Dashboard from './components/dashboard';
import Recipes from './components/recipesPage';
import rootReducer from './reducers/index';
import CreateRecipe from './components/createRecipes';
import Navbar from './components/navbar';
import store from './store';

// export const ROOT_URL = 'http://127.0.0.1:5000/api';

const rootStore = store();

const App = () => (
  <Provider>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/view_recipes/:id" component={Recipes} />
        <Route exact path="/create_recipes/:id" component={CreateRecipe} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
