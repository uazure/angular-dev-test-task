import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';
import { RouterModule } from '@angular/router';
import { HourlyForecastTableComponent } from './hourly-forecast-table/hourly-forecast-table.component';
import { DailyForecastTableComponent } from './daily-forecast-table/daily-forecast-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent, SearchPanelComponent, ResultPanelComponent, HourlyForecastTableComponent, DailyForecastTableComponent, PageNotFoundComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: 'hourly', component: HourlyForecastTableComponent },
			{ path: 'daily', component: DailyForecastTableComponent },
			{ path: '', redirectTo: '/hourly', pathMatch: 'full' },
			{ path: '**', component: PageNotFoundComponent },
		]),
		BrowserAnimationsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
