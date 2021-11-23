import { createReducer, on } from '@ngrx/store';
import { setSearchString, setSelectedCity, reset } from './weather.actions';

interface WeatherState {
	searchString: string,
	selectedCityName: string | null,
	selectedCityLocation: Location | null,
}

export const initialState: WeatherState = {
	searchString: '',
	selectedCityName: null,
	selectedCityLocation: null,
};

const _weatherReducer = createReducer(
	initialState,
	on(setSearchString, (state, { searchString }) => ({...state, searchString})),
	on(setSelectedCity, (state, { name, location }) => ({ ...state, selectedCityName: name, selectedCityLocation: location})),
	on(reset, () => initialState)
);

// TODO: find out how to use types here
export function weatherReducer(state: any, action: any) {
	return _weatherReducer(state, action);
} 
