import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/reducers/goals/models/goal.model';
import { MatTableDataSource } from '@angular/material';
import { getGoals } from 'src/app/reducers/goals/goals.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  goals: Goal[] = [];
  dataSource: MatTableDataSource<Goal>;
  displayedColumns: string[] = [ 'Points', 'Description', 'Actions' ];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getGoals).subscribe((x: Goal[]) => {
      if(x){
        this.goals = x.map(y => new Goal(y));
        this.dataSource = new MatTableDataSource<Goal>(this.goals.filter(y => !y.isDeleted));
      }
      else
        this.goals = [];
    })
  }

  edit(goal: Goal){}

  delete(goal: Goal){
    goal.isDeleted = true;
    this.dataSource = new MatTableDataSource<Goal>(this.goals.filter(y => !y.isDeleted));
  }
  undoDelete(goal: Goal){
    goal.isDeleted = false;
  }

}
