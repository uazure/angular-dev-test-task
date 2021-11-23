import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class GeocodingService {
	constructor(private http: HttpClient) { }

	getLocation(cityName: string) {
		return this.http.get(this.buildLocationUrl(cityName));
	}

	private buildLocationUrl(cityName: string) {
		return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${environment.openweathermapApiKey}`
	}
}
