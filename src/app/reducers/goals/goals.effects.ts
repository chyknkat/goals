import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as GoalsActions from './goals.actions';
import { GoalsActionTypes } from './goals.actions';
import { GoalsService } from './goals.service';

@Injectable()
export class GoalsEffects {
    constructor(private actions$: Actions, private goalsService: GoalsService) { }

//   @Effect()
//   generateBatch$ = this.actions$.ofType(BusinessTaxesActionTypes.GenerateBatchAction).pipe(
//     mergeMap((action: TaxesActions.GenerateBatchAction) =>
//       this.taxesService.generateBatch(action.batchRequest).pipe(
//         map((response: ResultModel<string>) => {
//           // SUCESS
//           if (response.success) {
//             this.sharedService.showMessages('SUCCESS', [`Batch generation for ${action.batchRequest.stateCode} has started.`]);
//             return new TaxesActions.TaxesDefaultAction('GenerateBatchAction');
//           }
//             // FAIL
//             return new TaxesActions.TaxesDefaultErrorAction(response.errors, 'GenerateBatchAction');
//         }),
//         catchError(() => of(new TaxesActions.TaxesDefaultErrorAction(
//           ['Could not generate a new batch. Connection error.'], 'GenerateBatchAction')))
//       )
//     )
//   );
}