import axios from 'axios';

const API_KEY = '2a5939f53e5c9d700c23aaf160187ff4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';


export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}&units=metric`;
	return dispatch => {
	    dispatch({
	      type: 'FETCH_WEATHER_START'
	    });
		return axios(url)
			.then(
				data => dispatch({ type: 'FETCH_WEATHER_SUCCESS', data }),
				err => dispatch({ type: 'FETCH_WEATHER_FAIL' })
			);
	}
}

