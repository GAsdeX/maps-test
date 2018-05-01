import { MAP_SELECTED, MAP_ADDED } from './actionTypes';

export const selectMap = (map) => {
    console.log("You clicked ", map);
    return {
        type: MAP_SELECTED,
        payload: map
    };
};

export const addMap = (map, newMap) => {
    console.log(map);
    console.log(newMap);

    return {
        type: MAP_ADDED,
        payload: addAddress(newMap)
    };
};

function addAddress(newItem) {
    let addresses = JSON.parse(localStorage.getItem('addresses'));
    console.log(addresses);

    addresses.push(newItem);
    console.log(addresses);

    addresses = JSON.stringify(addresses);
    console.log(addresses);

    localStorage.setItem('addresses', addresses);

   // return addresses;
}
