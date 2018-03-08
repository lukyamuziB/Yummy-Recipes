import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';


import LandingPage from './components/landingPage';
import Login from './components/login'
import Register from './components/register'
import rootReducer from './reducers/index';

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </div>
      </BrowserRouter>
    </Provider>
    
    ,document.getElementById('root'));

