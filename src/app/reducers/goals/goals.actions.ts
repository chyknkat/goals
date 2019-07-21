import { Action } from '@ngrx/store';
import { Goal } from './models/goal.model';

export enum GoalsActionTypes {
  AddGoalAction = '[Goals] AddGoals',
  AddGoalSuccessAction = '[Goals] AddGoalsSuccess',

  GoalsDefaultErrorAction = '[Goals] Goals Default Error',
}

export class AddGoalAction implements Action {
  readonly type = GoalsActionTypes.AddGoalAction;
  constructor(public goal: Goal) { }
}

export class AddGoalSuccessAction implements Action {
  readonly type = GoalsActionTypes.AddGoalSuccessAction;
  constructor(public goal: Goal) { }
}

export class GoalsDefaultErrorAction implements Action {
    readonly type = GoalsActionTypes.GoalsDefaultErrorAction;
    constructor(public errors: string[], public actionType: string) { }
}

export type GoalsActions =
AddGoalAction | AddGoalSuccessAction |
GoalsDefaultErrorAction;