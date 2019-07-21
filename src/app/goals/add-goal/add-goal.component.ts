import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { RedirectToAction } from 'src/app/reducers/app/app.actions';

@Component({
  selector: 'add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {

  pointsNumber: number;
  pointsDescription: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  openGoals(){
    this.store.dispatch(new RedirectToAction(''));
  }

  addGoal(){
    
  }
}
