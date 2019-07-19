import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as AppActions from './app.actions';
import { AppActionTypes } from './app.actions';



@Injectable()
export class AppEffects {

  @Effect()
  redirect$ = this.actions$.pipe(
    ofType(AppActionTypes.RedirectToAction),
    mergeMap((action: AppActions.RedirectToAction) => {
      this.router.navigate([action.route]);
      return of(new AppActions.RedirectCompletedAction());
    })
  );

  constructor(private actions$: Actions, private router: Router) {}

}
