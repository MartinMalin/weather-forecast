import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherIcons from 'react-weathericons';
import styled from 'styled-components';
import { render } from 'react-dom';
import { Sentry } from 'react-activity';
import 'react-activity/dist/react-activity.css';

import '../assets/weather-icons/css/weather-icons.css';
import '../App.css';
import weatherIcons from '../assets/weather-icons/weatherIcons';

const FlexDiv = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerFlexDiv = styled.div`
justify-content: space-between;
width: 120px;
display: flex;
align-items: center;
`;

const MainFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

`;




class WeatherList extends Component {

	wIcons() {
		let prefix = 'wi wi-';
		if (this.props.weather.data) {
			let code = this.props.weather.data.data.weather[0].id;
			let icon = weatherIcons[code].icon;

			if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
				icon = 'day-' + icon;
			}
			icon = prefix + icon;
			return icon;
		}
	}

	render() {
		if(this.props.weather.errorMessage) {
			if (this.props.weather.isLoading == false) {
				return (
					<div>
						<p className="error-msg">{this.props.weather.errorMessage}</p>
					</div>
				);
			}
			return <Sentry size={100}/>;
		}
		if (this.props.weather.data) {
			if (this.props.weather.isLoading == false) {
				return (
					<div className={(new Date().getHours() >= '07' && new Date().getHours() <= '19') ? 'weather-div day': 'weather-div night'}>
						<p className="city">{this.props.weather.data.data.name}</p>
						<div>
							<WeatherIcons name={this.wIcons()} size="5x"/>
						</div>
						<div className="line"></div>
						<MainFlex>
							<p className="temperature">{Math.round(this.props.weather.data.data.main.temp)}&#176;C</p>
							<FlexDiv>
								<InnerFlexDiv>
									<WeatherIcons name="humidity" size="2x"/>
									<p className="humidity">{this.props.weather.data.data.main.humidity}%</p>
								</InnerFlexDiv>
								<InnerFlexDiv>
									<WeatherIcons name="barometer" size="2x"/>
									<p className="pressure">{this.props.weather.data.data.main.pressure}kPa</p>
								</InnerFlexDiv>
							</FlexDiv>
						</MainFlex>
					</div>
				);
			}
			return <Sentry size={100}/>;
			
		}
		return <div><p className="city">Enter City To Show Weather Forecast!</p></div>
	}
}

function mapStateToProps({ weather }) {
	console.log(weather);
	return { weather };
}


export default connect(mapStateToProps)(WeatherList);
