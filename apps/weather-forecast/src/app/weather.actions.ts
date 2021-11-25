import { createAction, props } from '@ngrx/store';
import { setSearchStringAction, setSelectedCityAction, setForecastTypeAction, setDailyWeatherAction, setHourlyWeatherAction } from './constants';
import { Location } from './interfaces/location.interface';
import { ForecastType } from './types';



export const setSearchString = createAction(setSearchStringAction, props<{searchString: string}>());
export const setSelectedCity = createAction(setSelectedCityAction, props<{name: string, location: Location }>());
export const setForecastType = createAction(setForecastTypeAction, props<{ forecastType: ForecastType}>());
export const setDailyWeather = createAction(setDailyWeatherAction, props<{ forecastData: any}>());
export const setHourlyWeather = createAction(setHourlyWeatherAction, props<{ forecastData: any}>());
export const reset = createAction('reset');
