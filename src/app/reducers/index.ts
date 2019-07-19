import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromGoals from './goals/goals.reducer';
import * as fromApp from './app/app.reducer';

export interface AppState {
  app: fromApp.State,
  goals: fromGoals.State;
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    app: fromApp.reducer,
    goals: fromGoals.reducer
  };
  
  export const metaReducers: MetaReducer<AppState>[] = [];