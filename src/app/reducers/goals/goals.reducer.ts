import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GoalsActions, GoalsActionTypes } from './goals.actions';


export interface State{

}

export const initialState: State = {};

export function reducer(state = initialState, action: GoalsActions): State {
    switch (action.type) {
        default: return state;
    }
}

export const getState = createFeatureSelector<State>('goals');