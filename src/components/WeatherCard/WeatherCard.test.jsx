import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import WeatherCard from './WeatherCard';


describe('WeatherCard component', () => {
  it('renders the date, icon, and temperature for sunny day', () => {
    const todayWeather = { temp: 20, rain: 0.2, date: '13th Feb, 2023' };
    const { getByText, container } = render(<WeatherCard todayWeather={todayWeather} />);

    expect(getByText('13th Feb, 2023')).toBeInTheDocument();
    expect(getByText('20 C°')).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.getElementsByClassName('wi-day-sunny');
    expect(icon.length).toBe(1);
  });

  it('renders the rain icon when the rain prop is more than 0.5', () => {
    const todayWeather = { temp: 20, rain: 0.6, date: '13th Feb, 2023' };
    const {container} = render(<WeatherCard todayWeather={todayWeather} />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const icon = container.getElementsByClassName('wi-day-rain-mix');
    expect(icon.length).toBe(1);
  });
});