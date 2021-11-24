import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { map } from 'rxjs/operators';

export interface GeolocationResponse {
	lat: number
	lon: number
	name: string
}


@Injectable({
	providedIn: 'root'
})
export class GeocodingService {
	constructor(private http: HttpClient) { }

	getLocation(cityName: string) {
		return this.http.get<GeolocationResponse[]>(this.buildLocationUrl(cityName)).pipe(map((response) => response[0]));
	}

	private buildLocationUrl(cityName: string) {
		return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${environment.openweathermapApiKey}`
	}
}
