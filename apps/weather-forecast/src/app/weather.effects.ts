import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, catchError, EMPTY, map } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';
import { setSearchStringActionName } from './constants';
// import { setSelectedCity } from './weather.actions';
import { GeocodingService, GeolocationResponse } from './geocoding.service';
import { setSelectedCity } from './weather.actions';

@Injectable()
export class WeatherEffects {

	resolveCityCoords$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setSearchStringActionName),
			tap((action) => console.log('action', action, 'service is', this.geocodingService)),
			mergeMap((action: any) => this.geocodingService.getLocation(action.searchString).pipe(
				tap((result) => {
					console.log('service response', result);
				}),
				map((response: GeolocationResponse) => setSelectedCity({name: response.name, location: {lat: response.lat, lon: response.lon}})),
				catchError(() => EMPTY)
			)	
			)
		),
	);


	constructor(
		private actions$: Actions,
		private geocodingService: GeocodingService,
	) {};
}
