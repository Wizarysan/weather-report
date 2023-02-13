import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import FullWeatherCard from './FullWeatherCard';

describe('FullWeatherCard component', () => {
  it('renders the date correctly', () => {
    const todayWeather = {
      temp: 20,
      rain: 0.2,
      date: 'Mon Feb 13 2023'
    };
    const { getByText } = render(<FullWeatherCard todayWeather={todayWeather} />);
    expect(getByText('Today is Mon Feb 13 2023', {exact: false})).toBeInTheDocument();
  });

  it('renders the temperature correctly', () => {
    const todayWeather = {
      temp: 20,
      rain: 0.2,
      date: 'Mon Feb 13 2023'
    };
    const { getByText } = render(<FullWeatherCard todayWeather={todayWeather} />);
    expect(getByText('20 C°')).toBeInTheDocument();
  });

  it('renders the rain icon with rain', () => {
    const todayWeather = {
      temp: 20,
      rain: 0.7,
      date: 'Mon Feb 13 2023'
    };

    const {container} = render(<FullWeatherCard todayWeather={todayWeather} />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.getElementsByClassName('wi-day-rain-mix');
    expect(icon.length).toBe(1);
  });

  it('renders the sunn icon with sunny day', () => {
    const todayWeather = {
      temp: 20,
      rain: 0.2,
      date: 'Mon Feb 13 2023'
    };

    const {container} = render(<FullWeatherCard todayWeather={todayWeather} />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.getElementsByClassName('wi-day-sunny');
    expect(icon.length).toBe(1);
  });
});