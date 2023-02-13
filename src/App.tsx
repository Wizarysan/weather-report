import React from 'react';
import styled from 'styled-components';
import Forecast from './containers/Forecast/Forecast';
import SearchBox from './components/SearchBox';

const StyledWrapper = styled.div` 
    padding: 20px;
`;

class App extends React.Component {
  render() {
    return (
      <StyledWrapper className="App">
        <SearchBox />
        <Forecast />
      </StyledWrapper>
    );
  }
}

export default App;
