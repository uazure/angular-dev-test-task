import { Component, OnInit } from '@angular/core';
import { selectedCityErrorSelector } from '../weather.selectors';
import { Store } from '@ngrx/store';

@Component({
	selector: 'bp-result-panel',
	templateUrl: './result-panel.component.html',
	styleUrls: ['./result-panel.component.scss']
})
export class ResultPanelComponent implements OnInit {
	selectedCityError$ = this.store.select(selectedCityErrorSelector);

	constructor(private store: Store) { }

	ngOnInit(): void {
	}

}
