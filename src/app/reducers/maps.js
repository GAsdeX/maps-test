import { MAP_SELECTED, MAP_ADDED } from "../actions/actionTypes";

const initialState = loadAddresses();

export function MapStore(state = initialState, action) {
    switch(action.type) {
        case MAP_SELECTED:
            return {
                ...state,
                name: 'olo'
            };
        case MAP_ADDED:
            return {
                ...state,
                name: 'olo'
            };
        default:
            return state;
    }
}

function loadAddresses() {
    let addresses = JSON.parse(localStorage.getItem('addresses'));

    console.log(addresses);

    if (!addresses) {
        localStorage.setItem('addresses', JSON.stringify(
            [
                {
                    lat: 40,
                    lnt: 50,
                    name: 'lol'
                }
            ]
        ));
    }

    return JSON.parse(localStorage.getItem('addresses'));
}

