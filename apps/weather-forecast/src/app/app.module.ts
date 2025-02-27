import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';
import { RouterModule } from '@angular/router';
import { HourlyForecastTableComponent } from './hourly-forecast-table/hourly-forecast-table.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { DailyForecastTableComponent } from './daily-forecast-table/daily-forecast-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio'
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './weather.reducer';
import { WeatherEffects } from './weather.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	declarations: [AppComponent, SearchPanelComponent, ResultPanelComponent, HourlyForecastTableComponent, DailyForecastTableComponent, PageNotFoundComponent, DailyForecastComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: 'hourly', component: HourlyForecastTableComponent },
			{ path: 'daily', component: DailyForecastComponent },
			{ path: '', redirectTo: '/daily', pathMatch: 'full' },
			{ path: '**', component: PageNotFoundComponent },
		]),
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		StoreModule.forRoot({ weather: weatherReducer }),
		EffectsModule.forRoot([WeatherEffects]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
