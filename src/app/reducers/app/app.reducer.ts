
import { AppActions, AppActionTypes } from './app.actions';
import { createFeatureSelector } from '@ngrx/store';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {

    // ROUTING
  case AppActionTypes.RedirectToAction:
    return state;
case AppActionTypes.RedirectCompletedAction:
    return state;

    default:
      return state;
  }
}

export const getState = createFeatureSelector<State>('app');
