import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, catchError, map, filter, of } from 'rxjs';
import { setSearchStringAction } from './constants';
import { GeocodingService, GeolocationResponse } from './geocoding.service';
import { setSelectedCity, setSelectedCityError } from './weather.actions';

@Injectable()
export class WeatherEffects {

	resolveCityCoords$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setSearchStringAction),
			tap((action) => console.log('action', action, 'service is', this.geocodingService)),
			filter((action: any) => action.searchString !== ''),
			mergeMap((action: any) => this.geocodingService.getLocation(action.searchString).pipe(
				tap((result) => {
					console.log('service response', result);
				}),
				filter(Boolean),
				map((response: GeolocationResponse) => setSelectedCity({name: response.name, location: {lat: response.lat, lon: response.lon}})),
				catchError((err) => {
					console.log('caught error in effect', err);
					return of(setSelectedCityError({hasError: true}));
				})
			)	
			)
		),
	);

	/*
	getWeather$ = createEffect(() => this.actions$.pipe(
		ofType(setForecastType, setSelectedCity),
		tap((action) => {console.log('action triggered', action)}),
		mergeMap(() => this.store.select(forecastLocationAndPeriodSelector)),
		// .pipe(
		distinctUntilChanged(),
		tap((locationAndPeriod) => {
			console.log('locationAndPeriod?', locationAndPeriod)
		}),
		filter((locationAndPeriod) => Boolean(locationAndPeriod.location && locationAndPeriod.period)),
		mergeMap((locationAndPeriod) => {
			if (locationAndPeriod.period === 'daily') {
				return this.weatherService.getDailyForecast(locationAndPeriod.location as Location);
			} else {
				return this.weatherService.getHourlyForecast(locationAndPeriod.location as Location);
			}
		}),
		tap((response) => {
			console.log('weather forecast', response);
		})
		// ),
		// mergeMap(([a1, a2]) => {
		// 	return this.weatherService.getWeather(a1.location, a2.forecastType)
		// }),
		// tap((response) => {
		// 	console.log('got response', response);
		// }),
		// map((response) => {
			
		// })
	), {dispatch: false}
	
	);
	*/


	constructor(
		private actions$: Actions,
		private geocodingService: GeocodingService,
	) {};
}
