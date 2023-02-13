import styled from 'styled-components';
import { useSelector } from 'react-redux'

import FullWeatherCard from "../../components/FullWeatherCard"
import WeatherCard from "../../components/WeatherCard"

const StyledForecast = styled.div` 
    margin-top: 30px;    
`;

const DailyCards = styled.div` 
    display: flex;
    flex-wrap: wrap;    
`;

const selectWeatherById = (weather: any, id: number) => {
  return {
    temp: weather.temperature_2m_max[id],
    rain: weather.rain_sum[id],
    date: new Date(weather.time[id]).toDateString()
  }
}

const Forecast = () => {
    const weatherData = useSelector((state: any) => state.weatherReducer?.weatherData?.daily)
    const cityName = useSelector((state: any) => state.cityGeoReducer?.cityGeo?.name)
    const countryName = useSelector((state: any) => state.cityGeoReducer?.cityGeo?.country)
    let dailyCards = []

    if(!weatherData) return <StyledForecast>No weather data found</StyledForecast>

    for(let i=1; i<=5; i++) {
      dailyCards.push(<WeatherCard key={'dailyCards'+i} todayWeather={selectWeatherById(weatherData, i)}/>)
    }

    return (
      <StyledForecast>
        <FullWeatherCard 
          todayWeather={selectWeatherById(weatherData, 0)} 
          city={cityName} 
          country={countryName}
        />
        <DailyCards>
          {dailyCards}
        </DailyCards>       
      </StyledForecast>
    )
  }

export default Forecast