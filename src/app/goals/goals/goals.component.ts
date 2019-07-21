import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { RedirectToAction } from 'src/app/reducers/app/app.actions';
import { getGoals } from 'src/app/reducers/goals/goals.reducer';
import { Goal } from 'src/app/reducers/goals/models/goal.model';

@Component({
  selector: 'goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goals: Goal[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getGoals).subscribe((x: Goal[]) => {
      if(x)
        this.goals = x.map(y => new Goal(y));
      else
        this.goals = [];
    })
  }

  openAddGoal(){
    this.store.dispatch(new RedirectToAction('goals/add'));
  }
}
