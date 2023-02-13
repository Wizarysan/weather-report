export default (state = {}, action) => {
    switch (action.type) {
     case 'CITY_FETCH_SUCCEEDED':
      return {
       cityGeo: action.payload.results[0]
      };
     default:
      return state;
    }
   };