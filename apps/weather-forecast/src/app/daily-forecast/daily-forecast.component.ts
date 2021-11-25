import { Component, OnInit } from '@angular/core';
import { selectedCityLocationSelector, dailyForecastSelector } from './../weather.selectors';
import { Store } from '@ngrx/store';
import { WeatherService } from './../weather.service';
import { combineLatest, tap, filter, EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { setDailyWeather } from '../weather.actions';
import { Location } from '../interfaces/location.interface';

@Component({
	selector: 'bp-daily-forecast',
	templateUrl: './daily-forecast.component.html',
	styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {

	selectedCityLocation$ = this.store.select(selectedCityLocationSelector);
	dailyForecast$ = this.store.select(dailyForecastSelector);


	constructor(private store: Store, private weatherService: WeatherService) {
	}

	ngOnInit(): void {
		combineLatest([this.selectedCityLocation$, this.dailyForecast$]).pipe(
			tap(([city, forecast]) => { console.log('pipe', city, forecast) }),
			filter(([cityLocation, forecast]) => Boolean(!forecast && cityLocation)),
			mergeMap(([cityLocation, forecast]) => this.weatherService.getDailyForecast(cityLocation as Location).pipe(
				tap((result) => {
					console.log('service response', result);
					this.store.dispatch(setDailyWeather({ forecastData: result.daily }));
				}),
				catchError(() => EMPTY)
			)
			)
		)
			.subscribe((daily) => {
				console.log('got daily forecast in sub', daily);
			})
	}
}

