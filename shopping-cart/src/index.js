import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import '../src/components/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux'; 
import App from './components/App';



const store= createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter> < App/></BrowserRouter>
    </Provider> 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
