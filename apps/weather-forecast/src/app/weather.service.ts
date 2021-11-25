import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './interfaces/location.interface';
import { environment } from '../environments/environment';
import { HourlyForecast, DailyForecast } from './interfaces/weather.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) { }

	getHourlyForecast(location: Location) {
		return this.http.get<HourlyForecast>(this.buildHourlyForecastUrl(location));
	}
  
	getDailyForecast(location: Location): Observable<DailyForecast> {
		return this.http.get<DailyForecast>(this.buildDailyForecastUrl(location));
	}

	private buildHourlyForecastUrl(location: Location) {
		return `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,daily,alerts&appid=${environment.openweathermapApiKey}`
	}
  
	private buildDailyForecastUrl(location: Location) {
		return `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly,alerts&appid=${environment.openweathermapApiKey}`
	}
}
