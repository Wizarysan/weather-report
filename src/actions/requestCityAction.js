export const requestCityAction = () => dispatch => {
    dispatch({
        type: 'CITY_FETCH_REQUESTED',
        payload: cityName
    })
   }