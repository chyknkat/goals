import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as GoalsActions from './goals.actions';
import { GoalsActionTypes } from './goals.actions';
import { GoalsService } from './goals.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ResultModel } from '../app/models/result-model.model';
import { Goal } from './models/goal.model';
import { of } from 'rxjs';

@Injectable()
export class GoalsEffects {
    constructor(private actions$: Actions, private goalsService: GoalsService) { }

  @Effect()
  addGoal$ = this.actions$.pipe(ofType(GoalsActionTypes.AddGoalAction),
    mergeMap((action: GoalsActions.AddGoalAction) =>
      this.goalsService.addGoal(action.goal).pipe(
        map((response: ResultModel<Goal>) => {
          // SUCESS
          if (response.success) {
            return new GoalsActions.AddGoalSuccessAction(response.data);
          }
            // FAIL
            return new GoalsActions.GoalsDefaultErrorAction(response.errors, 'AddGoalAction');
        }),
        catchError(() => of(new GoalsActions.GoalsDefaultErrorAction(
          ['Could not add goal. Connection error.'], 'AddGoalAction')))
      )
    )
  );

  @Effect()
  deleteGoal$ = this.actions$.pipe(ofType(GoalsActionTypes.DeleteGoalAction),
    mergeMap((action: GoalsActions.DeleteGoalAction) =>
      this.goalsService.deleteGoal(action.goal).pipe(
        map((response: ResultModel<Goal>) => {
          // SUCESS
          if (response.success) {
            return new GoalsActions.DeleteGoalSuccessAction(response.data);
          }
            // FAIL
            return new GoalsActions.GoalsDefaultErrorAction(response.errors, 'DeleteGoalAction');
        }),
        catchError(() => of(new GoalsActions.GoalsDefaultErrorAction(
          ['Could not delete goal. Connection error.'], 'DeleteGoalAction')))
      )
    )
  );

}