import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GoalsActions, GoalsActionTypes } from './goals.actions';
import { Goal } from './models/goal.model';


export interface State{
    goal: Goal;
    goals: Goal[];
}

export const initialState: State = {
    goal: null,
    goals: null
};

export function reducer(state = initialState, action: GoalsActions): State {
    switch (action.type) {
        case GoalsActionTypes.AddGoalAction:
        case GoalsActionTypes.DeleteGoalAction:
            return {...state, goal: action.goal};

        case GoalsActionTypes.AddGoalSuccessAction:
            var goals = state.goals;
            if(goals)
                goals.push(action.goal);
            else{
                goals = [];
                goals.push(action.goal);
            }
            return {...state, goals: goals};

        case GoalsActionTypes.DeleteGoalSuccessAction:
            let goalsWithDeleted = [];
            goalsWithDeleted.push(state.goals);
            //var goalToDelete = state.goals.find(x => x.id === action.goal.id)[0];
            let goalToDelete = state.goals.find(x => x.description.toLowerCase() === action.goal.description.toLowerCase());
            const i = state.goals.indexOf(goalToDelete);
            goalsWithDeleted.splice(i, 1, new Goal(action.goal));
            return {...state, goals: goalsWithDeleted};

        default: return state;
    }
}

export const getState = createFeatureSelector<State>('goals');

export const getGoal = createSelector(getState, state => state.goal);
export const getGoals = createSelector(getState, state => state.goals);