import { combineReducers } from 'redux';

import cityGeoReducer from './cityGeoReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    cityGeoReducer,
    weatherReducer
});