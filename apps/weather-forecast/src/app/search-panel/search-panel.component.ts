import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';
import { setSearchString } from './../weather.actions';
import { Store } from '@ngrx/store';

@Component({
	selector: 'bp-search-panel',
	templateUrl: './search-panel.component.html',
	styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit, OnDestroy {
	options: FormGroup;
	forecastType = new FormControl('hour');
	cityName = new FormControl('');
	private subscriptions: Subscription[] = [];

	constructor(fb: FormBuilder, private router: Router, private store: Store) {
		this.options = fb.group({
			forecastType: this.forecastType,
			cityName: this.cityName,
		});
	}

	ngOnInit(): void {
		const forecastTypeSubscription = this.options.controls.forecastType.valueChanges.subscribe((val) => {
			console.log('val is', val);

			switch (val) {
				case 'hour':
					this.router.navigate(['hourly']);
					break;
				case 'day':
					this.router.navigate(['daily']);
					break;
			}

		});

		const cityNameSubscription = this.options.controls.cityName.valueChanges
			.pipe(
			  debounceTime(500)
			).subscribe((searchString) => {
				this.store.dispatch(setSearchString({searchString}))
			});

		this.subscriptions.push(forecastTypeSubscription, cityNameSubscription);
	}

	ngOnDestroy() {
		this.subscriptions.forEach((sub) => sub.unsubscribe());
	}

}
