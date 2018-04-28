import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { createStore } from "redux";
import Store from './app/store'
const store = createStore(Store);

// const initialState = {
//     result: 1,
//     lastValues: []
// };
//
// const reducer  = (state = initialState, action) => {
//     switch (action.type) {
//         case 'add':
//             state = {
//                 ...state,
//                 result: state.result + action.payload
//             };
//             state.lastValues.push(action.payload);
//             break;
//         case 'less':
//             state = state - action.payload;
//             break;
//     }
//     return state;
// };
//

//
// store.subscribe(() => {
//     console.log('Store', store.getState());
// });
//
// store.dispatch({
//     type: "add",
//     payload: 10
// });

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

