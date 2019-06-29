import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromGoals from './goals/goals.reducer';

export interface AppState {
  goals: fromGoals.State;
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    goals: fromGoals.reducer
  };
  
  export const metaReducers: MetaReducer<AppState>[] = [];