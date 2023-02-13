import { apiAdressCity, apiAdressWeather } from './endpoints'

const fetchCity = (cityName: string): any => {
    return fetch(apiAdressCity+cityName)
    .then((response) => response.json())
    .then((data) => data);
}

const fetchWeather = (geoData: any): any => {
    return fetch(apiAdressWeather(geoData))
    .then((response) => response.json())
    .then((data) => data);
}

export { fetchCity, fetchWeather }