import styled from 'styled-components';
import { IWeatherCardProps } from "../FullWeatherCard/FullWeatherCard";

const WeatherStyled = styled.div` 
    $text-color: #FFFFFF;
    font-family: "Poppins", sans-serif;
    color: $text-color;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.20);
    margin-right: 20px;
    margin-bottom: 20px;
    min-with: 150px;
    & .weather-icon {        
        margin-top: 10px;
        margin-bottom: 10px;
    }
    & .wi {
        font-size: 35px;
    }
    & .weather-temp {
        font-size: 20px;
        font-weight: bold;
    }
`;

const WeatherCard: React.FC<IWeatherCardProps> = ({ todayWeather }: IWeatherCardProps) => {
    const { temp, rain, date } = todayWeather

    return(
        <WeatherStyled className="weather-card">
            <div className="weather-date">{ date }</div>
            <div className="weather-icon">
                { rain > 0.5 ? <i className="wi wi-day-rain-mix"></i> : <i className="wi wi-day-sunny"></i>}
            </div>
            <div className="weather-temp">{ temp } C°</div>
        </WeatherStyled>
    )
}

export default WeatherCard;