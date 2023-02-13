import { fork } from 'redux-saga/effects';
import { fetchCityWatcher } from './citySaga';
import { fetchWeatherWatcher } from './weatherSaga';

export default function* rootSaga() {
    yield fork(fetchCityWatcher);
    yield fork(fetchWeatherWatcher);
}