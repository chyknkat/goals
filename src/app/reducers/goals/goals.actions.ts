import { Action } from '@ngrx/store';

export enum GoalsActionTypes {
    GoalsDefaultErrorAction = '[Goals] Goals Default Error',
}

export class GoalsDefaultErrorAction implements Action {
    readonly type = GoalsActionTypes.GoalsDefaultErrorAction;
    constructor(public errors: string[], public actionType: string) { }
  }

export type GoalsActions =
GoalsDefaultErrorAction;