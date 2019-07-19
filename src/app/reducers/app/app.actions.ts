import { Action } from '@ngrx/store';

export enum AppActionTypes {
  // ROUTING
  RedirectToAction = '[App] Redirect To',
  RedirectCompletedAction = '[App] Redirect Completed'
  
  
}

// ROUTING
export class RedirectToAction implements Action {
  readonly type = AppActionTypes.RedirectToAction;
  constructor(public route: string) { }
}
export class RedirectCompletedAction implements Action {
  readonly type = AppActionTypes.RedirectCompletedAction;
}


export type AppActions = RedirectToAction |
RedirectCompletedAction;
