import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchWeather } from '../utils/api';

function* fetchWeatherSaga(action) {
    try {
       const weatherData = yield call( fetchWeather, action.results[0] );
       yield put({type: "WEATHER_FETCH_SUCCEEDED", payload: weatherData });
    } catch (e) {
       yield put({type: "WEATHER_FETCH_FAILED", message: e.message});
    }
 }

function* fetchWeatherWatcher() {
    yield takeEvery("WEATHER_FETCH_REQUESTED", fetchWeatherSaga);
}

export { fetchWeatherWatcher, fetchWeatherSaga };