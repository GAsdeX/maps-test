import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { createStore } from "redux";
import { initialReducer } from './app/reducers/index';
const store = createStore(initialReducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

