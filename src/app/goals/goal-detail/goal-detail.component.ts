import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/reducers/goals/models/goal.model';
import { MatTableDataSource } from '@angular/material';
import { getGoals } from 'src/app/reducers/goals/goals.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { DeleteGoalAction } from 'src/app/reducers/goals/goals.actions';

@Component({
  selector: 'goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  goals: Goal[] = [];
  dataSource: MatTableDataSource<Goal>;
  displayedColumns: string[] = [ 'Points', 'Description', 'Actions' ];
  showDeletedButton: boolean;
  showHideDeletedButton: boolean;
  deletedGoals: Goal[] = [];
  filteredGoals: Goal[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getGoals).subscribe((x: Goal[]) => {
      if(x){
        this.goals = x.map(y => new Goal(y));
        this.filteredGoals = this.goals.filter(y => !y.isDeleted) || [];
        this.dataSource = new MatTableDataSource<Goal>(this.filteredGoals);
        this.deletedGoals = this.goals.filter(y => y.isDeleted) || [];
        this.showHideDeletedButton = false;
        this.populateShowDeletedButton();
      }
      else
        this.goals = [];
        this.filteredGoals = [];
        this.deletedGoals = [];
        this.showDeletedButton = false;
    })
  }

  edit(goal: Goal){}

  delete(goal: Goal){
    this.store.dispatch(new DeleteGoalAction(goal));
  }
  undoDelete(goal: Goal){
    goal.isDeleted = false;
  }

  showDeleted(){
    this.dataSource = new MatTableDataSource<Goal>(this.goals);
    this.showDeletedButton = false;
    this.populateHideDeletedButton();
  }

  hideDeleted(){
    this.dataSource = new MatTableDataSource<Goal>(this.filteredGoals);
    this.showHideDeletedButton = false;
    this.populateShowDeletedButton();
  }

  populateHideDeletedButton(){
    this.showHideDeletedButton = this.deletedGoals.length > 0 && !this.showDeletedButton;
  }

  populateShowDeletedButton(){
    this.showDeletedButton = this.deletedGoals.length > 0 && !this.showHideDeletedButton;
  }

  

}
