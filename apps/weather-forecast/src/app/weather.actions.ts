import { createAction, props } from '@ngrx/store';
import { setSearchStringActionName, setSelectedCityActionName } from './constants';
import { Location } from './interfaces/location.interface';

export const setSearchString = createAction(setSearchStringActionName, props<{searchString: string}>());
export const  setSelectedCity = createAction(setSelectedCityActionName, props<{name: string, location: Location }>());
export const reset = createAction('reset');
