import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.reducer';

export const weatherSelector = createFeatureSelector<WeatherState>('weather');
export const hourlyForecastSelector = createSelector(weatherSelector, (weather) => weather.hourlyForecast);
export const dailyForecastSelector = createSelector(weatherSelector, (weather) => weather.dailyForecast);
export const forecastTypeSelector = createSelector(weatherSelector, (weather) => weather.forecastType);
export const selectedCityLocationSelector = createSelector(weatherSelector, (weather) => weather.selectedCityLocation);
export const forecastLocationAndPeriodSelector = createSelector(
	forecastTypeSelector,
	selectedCityLocationSelector,
	(period, location) => ({period, location})
);
