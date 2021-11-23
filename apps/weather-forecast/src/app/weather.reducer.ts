import { createReducer, on } from '@ngrx/store';
import { setSearchString, setSelectedCity, reset } from './weather.actions';

interface State {
	searchString: string,
	selectedCityName: string | null,
	selectedCityLocation: Location | null,
}

export const initialState: State = {
	searchString: '',
	selectedCityName: null,
	selectedCityLocation: null,
};

const _counterReducer = createReducer(
	initialState,
	on(setSearchString, (state, {searchString}) => ({...state, searchString})),
	on(setSelectedCity, (state, { name, location }) => ({ ...state, selectedCityName: name, selectedCityLocation: location})),
	on(reset, () => initialState)
);

export function weatherReducer(state, action) {
	return _counterReducer(state, action);
}
