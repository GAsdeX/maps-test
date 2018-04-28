import { combineReducers } from 'redux';
import MapReducer from './maps';

const allReducers = combineReducers({
    maps: MapReducer
});

export default allReducers;