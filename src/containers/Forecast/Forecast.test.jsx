import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store';
import Forecast from './Forecast';

const mockStore = configureStore([]);

describe('Forecast component', () => {
  it('renders correctly when weatherData is present', () => {
    const state = {
      weatherReducer: {
        weatherData: {
          daily: {
            temperature_2m_max: [20, 22, 21, 25, 30],
            rain_sum: [0.2, 0.3, 0.1, 0, 0.5],
            time: [
              '2023-02-12T00:00:00.000Z',
              '2023-02-13T00:00:00.000Z',
              '2023-02-14T00:00:00.000Z',
              '2023-02-15T00:00:00.000Z',
              '2023-02-16T00:00:00.000Z'
            ]
          }
        }
      }
    };
    const store = mockStore(state);
    const { getByText } = render(
      <Provider store={store}>
        <Forecast />
      </Provider>
    );
    expect(getByText('20 C°')).toBeInTheDocument();
  });

  it('renders correctly when weatherData is not present', () => {
    const state = { weatherReducer: {} };
    const store = mockStore(state);
    const { getByText } = render(
      <Provider store={store}>
        <Forecast />
      </Provider>
    );
    expect(getByText('No weather data found')).toBeInTheDocument();
  });
});