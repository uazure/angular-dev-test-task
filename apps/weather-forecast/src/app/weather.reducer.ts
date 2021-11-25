import { createReducer, on } from '@ngrx/store';
import { setSearchString, setSelectedCity, reset, setForecastType, setDailyWeather, setHourlyWeather } from './weather.actions';
import { Location } from './interfaces/location.interface';
import { ForecastType } from './types';

interface WeatherForecast {
	clouds: number
	dew_point: number
	dt: number
	feels_like: { day: 308.73, night: 296.02, eve: 299.05, morn: 298.43 }
	humidity: number
	moon_phase: number
	moonrise: number
	moonset: number
	pop: number
	pressure: number
	rain: number
	sunrise: number
	sunset: number
	temp: { day: number, min: number, max: number, night: number, eve: number, morn: number }
	uvi: number
	weather: {
		description: string
		icon: string
		id: number
		main: string}[]
	wind_deg: number
	wind_gust: number
	wind_speed: number
}

interface DailyForecast {
	daily: WeatherForecast[]
	lat: number
	lon: number
}

interface HourlyForecast {
	hourly: WeatherForecast[]
	lat: number
	lon: number
}

export interface WeatherState {
	searchString: string,
	selectedCityName: string,
	selectedCityLocation: Location | null,
	forecastType: ForecastType,
	dailyForecast: DailyForecast | null,
	hourlyForecast: HourlyForecast | null,
}

export const initialState: WeatherState = {
	searchString: '',
	selectedCityName: '',
	selectedCityLocation: null,
	forecastType: 'daily',
	dailyForecast: null,
	hourlyForecast: null,
};

const _weatherReducer = createReducer(
	initialState,
	on(setSearchString, (state, { searchString }) => ({ ...state, searchString, selectedCityName: initialState.selectedCityName, selectedCityLocation: initialState.selectedCityLocation})),
	on(setSelectedCity, (state, { name, location }) => ({ ...state, selectedCityName: name, selectedCityLocation: location, dailyForecast: initialState.dailyForecast, hourlyForecast: initialState.hourlyForecast})),
	on(setForecastType, (state, { forecastType }) => ({...state, forecastType})),
	on(setDailyWeather, (state, {forecastData}) => ({...state, dailyForecast: forecastData})),
	on(setHourlyWeather, (state, {forecastData}) => ({...state, hourlyForecast: forecastData})),
	on(reset, () => initialState)
);

// TODO: find out how to use types here
export function weatherReducer(state: any, action: any) {
	return _weatherReducer(state, action);
} 
