import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

import styled from 'styled-components';

const AppDiv = styled.div`
  padding: 50px;
  text-align: center;
`;

export default class App extends Component {
  render() {
    return (
      <AppDiv>
        <SearchBar />
        <WeatherList />       
      </AppDiv>
    );
  }
}
