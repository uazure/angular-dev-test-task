import { Component, Input, OnInit } from '@angular/core';

import { DailyForecast } from './../interfaces/weather.interface';

@Component({
	selector: 'bp-daily-forecast-table',
	templateUrl: './daily-forecast-table.component.html',
	styleUrls: ['./daily-forecast-table.component.scss']
})
export class DailyForecastTableComponent implements OnInit {

	@Input()
	forecast: DailyForecast | null = null;

	@Input()
	error: boolean | null = false;

	ngOnInit(): void {

	}

}
