import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCity } from '../utils/api';

import { fetchWeatherSaga } from './weatherSaga';

function* fetchCitySaga(action) {
    try {
       const cityGeoData = yield call(fetchCity, action.payload.cityName);
       yield call(fetchWeatherSaga, cityGeoData);
       yield put({type: "CITY_FETCH_SUCCEEDED", payload: cityGeoData });       
    } catch (e) {
       yield put({type: "CITY_FETCH_FAILED", message: e.message});
    }
 }

function* fetchCityWatcher() {
    yield takeEvery("CITY_FETCH_REQUESTED", fetchCitySaga);
}

export { fetchCityWatcher };