import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';
import { setSearchString, setForecastType } from './../weather.actions';
import { Store } from '@ngrx/store';

@Component({
	selector: 'bp-search-panel',
	templateUrl: './search-panel.component.html',
	styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit, OnDestroy {
	options: FormGroup;
	forecastType = new FormControl('hourly');
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
			this.syncQueryParams();

			// switch (val) {
			// 	case 'hourly':
			// 		this.store.dispatch(setForecastType({forecastType: 'hourly'}));
			// 		this.router.navigate(['hourly'], {});
			// 		break;
			// 	case 'daily':
			// 		this.store.dispatch(setForecastType({ forecastType: 'daily' }));
			// 		this.router.navigate(['daily']);
			// 		break;
			// }

		});

		const cityNameSubscription = this.options.controls.cityName.valueChanges
			.pipe(
				debounceTime(500)
			).subscribe((searchString) => {
				console.log('searching for typed in city', searchString);
				this.syncQueryParams();
			});

		// const handleUrl = (url: UrlSegment[]) => {
		// 	console.log('handling url change', url);
		// 	if (url.length === 0) {
		// 		return;
		// 	}
		// 	if (url[0].path === 'daily') {
		// 		this.store.dispatch(setForecastType({ forecastType: 'daily' }));
		// 		console.log('setting forecast type to daily');
		// 		this.forecastType.setValue('daily');
		// 	} else if (url[0].path === 'hourly') {
		// 		this.store.dispatch(setForecastType({ forecastType: 'hourly' }));
		// 		this.forecastType.setValue('hourly');
		// 	}
		// }

		// handleUrl(this.activatedRoute.root.snapshot.url);

		// // sync router params to store (forecastType)
		// const sub3 = this.activatedRoute.root.url.subscribe(handleUrl);

		// const sub4 = this.activatedRoute.queryParams.subscribe((params) => {
		// 	this.store.dispatch(setSearchString({ searchString: params.search}));
		// 	this.cityName.setValue(params.search, { emitEvent: false });
		// })

		this.subscriptions.push(forecastTypeSubscription, cityNameSubscription);
	}

	ngOnDestroy() {
		this.subscriptions.forEach((sub) => sub.unsubscribe());
	}

	onSubmit() {
		console.log('submitting the form');
		const searchString = this.options.controls.cityName.value;
		this.store.dispatch(setSearchString({ searchString }));
	}

	syncQueryParams() {
		const forecastType = this.options.controls.forecastType.value;
		const cityName = this.options.controls.cityName.value;
		this.router.navigate([forecastType === 'hourly' ? 'hourly' : 'daily'], {
			queryParams: {
				search: cityName,
			}
		});
		this.store.dispatch(setForecastType({forecastType}));
		this.store.dispatch(setSearchString({searchString: cityName}));
	}
}
