import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { RedirectToAction } from 'src/app/reducers/app/app.actions';
import { Goal } from 'src/app/reducers/goals/models/goal.model';
import { AddGoalAction } from 'src/app/reducers/goals/goals.actions';

@Component({
  selector: 'add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {

  goal: Goal;
  error: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.goal = new Goal();
  }

  openGoals(){
    this.store.dispatch(new RedirectToAction(''));
  }

  addGoal(){
    this.error = null;
    if(!this.goalIsValid()){
      this.error = 'Points and Description are not valid.'
      return;
    }
    this.store.dispatch(new AddGoalAction(this.goal));
    this.store.dispatch(new RedirectToAction(''));
  }

  goalIsValid(){
    if(!this.goal.numberOfPoints) return false;
    if(!this.goal.description || this.goal.description == '') return false;
    return true;
  }
}
