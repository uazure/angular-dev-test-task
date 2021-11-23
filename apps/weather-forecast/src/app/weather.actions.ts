import { createAction, props } from '@ngrx/store';

export const setSearchString = createAction('setSearchString', props<{searchString: string}>());
export const setSelectedCity = createAction('setSelectedCity', props<{name: string, location: Location }>());
export const reset = createAction('reset');
