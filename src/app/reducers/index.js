import { combineReducers } from 'redux';
import { MapStore } from "./maps";

export const initialReducer = combineReducers({
    MapStore: MapStore
});