import styled from 'styled-components';

const FullWeatherStyled = styled.div` 
    $text-color: #FFFFFF;
    font-family: "Poppins", sans-serif;
    color: $text-color;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.20);
    margin-right: 20px;
    margin-bottom: 30px;
    max-width: 315px;
    & .fullWeather-date {        
        font-size: 21px;
        margin-bottom: 25px;
        line-height:1.5;
    }
    & .fullWeather-icon {        
        margin-top: 10px;
        margin-bottom: 10px;
    }
    & .wi {
        font-size: 50px;
        margin-bottom: 10px;
    }
    & .fullWeather-temp {
        font-size: 25px;
        font-weight: bold;
    }
    & .fullWeather-chance {
        font-size: 18px;
        margin-top: 15px;
    }
`;

const FullWeatherCard: React.FC<IWeatherCardProps> = ({ todayWeather, city, country }: IWeatherCardProps) => {
    const { temp, rain, date } = todayWeather
    return(
        <FullWeatherStyled className="fullWeather-card">
            <div className="fullWeather-date">Today is { date } <br/>in <b>{city}, {country}</b></div>
            <div className="fullWeather-icon">
                { rain > 0.5 ? <i className="wi wi-day-rain-mix"></i> : <i className="wi wi-day-sunny"></i>}
            </div>
            <div className="fullWeather-temp">{ temp } C°</div>
            <div className="fullWeather-chance">Chance of rain: { rain * 10 }%</div>
        </FullWeatherStyled>
    )
}

export interface IWeatherCardProps {
    todayWeather: {
        temp: number;
        rain: number;
        date: string;
    },
    city?: string;
    country?: string;
}

export default FullWeatherCard;