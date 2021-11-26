import { createReducer, on } from '@ngrx/store';
import { setSearchString, setSelectedCity, reset, setForecastType, setDailyWeather, setHourlyWeather, setDailyWeatherLoadingError, setHourlyWeatherLoadingError, setSelectedCityError } from './weather.actions';
import { Location } from './interfaces/location.interface';
import { ForecastType } from './types';
import { DailyForecast, HourlyForecast } from './interfaces/weather.interface';

export interface WeatherState {
	searchString: string,
	selectedCityName: string,
	selectedCityLocation: Location | null,
	selectedCityError: boolean,
	forecastType: ForecastType,
	dailyForecast: DailyForecast | null,
	dailyForecastLoadingError: boolean,
	hourlyForecast: HourlyForecast | null,
	hourlyForecastLoadingError: boolean,
}

export const initialState: WeatherState = {
	searchString: '',
	selectedCityName: '',
	selectedCityLocation: null,
	selectedCityError: false,
	forecastType: 'daily',
	dailyForecast: null,
	dailyForecastLoadingError: false,
	hourlyForecast: null,
	hourlyForecastLoadingError: false,
};

const _weatherReducer = createReducer(
	initialState,
	on(setSearchString, (state, { searchString }) => ({ ...state, searchString, selectedCityName: initialState.selectedCityName, selectedCityLocation: initialState.selectedCityLocation, setSelectedCityError: initialState.selectedCityError})),
	on(setSelectedCity, (state, { name, location }) => ({ ...state, selectedCityName: name, selectedCityLocation: location, dailyForecast: initialState.dailyForecast, hourlyForecast: initialState.hourlyForecast, dailyForecastLoadingError: false, hourlyForecastLoadingError: false, selectedCityError: initialState.selectedCityError})),
	on(setSelectedCityError, (state, { hasError }) => ({ ...state, selectedCityError: hasError})),
	on(setForecastType, (state, { forecastType }) => ({...state, forecastType})),
	on(setDailyWeather, (state, { forecastData }) => ({ ...state, dailyForecast: forecastData, dailyForecastLoadingError: false})),
	on(setHourlyWeather, (state, { forecastData }) => ({ ...state, hourlyForecast: forecastData, hourlyForecastLoadingError: false})),
	on(setDailyWeatherLoadingError, (state, { hasError }) => ({ ...state, dailyForecastLoadingError: hasError})),
	on(setHourlyWeatherLoadingError, (state, { hasError }) => ({ ...state, hourlyForecastLoadingError: hasError})),
	on(reset, () => initialState)
);

// TODO: find out how to use types here
export function weatherReducer(state: any, action: any) {
	return _weatherReducer(state, action);
} 
