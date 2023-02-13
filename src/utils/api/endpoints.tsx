const apiAdressCity = `https://geocoding-api.open-meteo.com/v1/search?name=`

const apiAdressWeather = (geoData: any) => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max&timezone=Asia%2FTokyo`
}

export { apiAdressCity, apiAdressWeather }