export default (state = {}, action) => {
    switch (action.type) {
     case 'WEATHER_FETCH_SUCCEEDED':
      return {
       weatherData: action.payload
      };
     default:
      return state;
    }
   };