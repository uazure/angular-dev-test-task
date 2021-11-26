import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.reducer';

export const weatherSelector = createFeatureSelector<WeatherState>('weather');
export const hourlyForecastSelector = createSelector(weatherSelector, (weather) => weather.hourlyForecast);
export const hourlyForecastLoadingErrorSelector = createSelector(weatherSelector, (weather) => weather.hourlyForecastLoadingError);
export const dailyForecastSelector = createSelector(weatherSelector, (weather) => weather.dailyForecast);
export const dailyForecastLoadingErrorSelector = createSelector(weatherSelector, (weather) => weather.dailyForecastLoadingError);
export const forecastTypeSelector = createSelector(weatherSelector, (weather) => weather.forecastType);
export const selectedCityLocationSelector = createSelector(weatherSelector, (weather) => weather.selectedCityLocation);
export const selectedCityErrorSelector = createSelector(weatherSelector, (weather) => weather.selectedCityError);
export const forecastLocationAndPeriodSelector = createSelector(
	forecastTypeSelector,
	selectedCityLocationSelector,
	(period, location) => ({period, location})
);
