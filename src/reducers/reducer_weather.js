import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from '../actions';

const initialState = {
	data: null,
	errorMessage: null,
	isLoading: false
};

export default function(state = initialState, action) {

	console.log('action received', action);

	switch (action.type) {

	case FETCH_WEATHER_START:
		return { ...state, isLoading: true };

	case FETCH_WEATHER_FAIL:
		return { ...state, isLoading: false, errorMessage: 'Enter Valid City!' };

	case FETCH_WEATHER_SUCCESS:
		return { ...state, data: action.data, isLoading: false, errorMessage:  '' };

	default: 
	return state;

	}
}