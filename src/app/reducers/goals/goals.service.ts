import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { ResultModel } from '../app/models/result-model.model';
import { Goal } from './models/goal.model';

@Injectable(({providedIn: 'root'}) as any)
export class GoalsService {

    private url = environment.api;
    constructor(private http: HttpClient) { }

    addGoal(goal: Goal): Observable<ResultModel<Goal>> {
      goal.isDeleted = false;
        return of(new ResultModel<Goal>(true, goal, null));
        // return this.http.get(this.url + `api/auth/GetAllUsers`, this.authService.getAuthHttpOptions())
        //   .pipe(map((response: ResultModel<any>) => {
        //       const users = response.data.map(x => new BassUser(x));
        //       return new ResultModel<BassUser[]>(response.success, users, response.errors);
        //     })
        //   );
      }
}