import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Provider from "react-redux/lib/components/Provider";
import rootReducer from "./components/reducers";
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

