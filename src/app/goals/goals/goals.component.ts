import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { RedirectToAction } from 'src/app/reducers/app/app.actions';

@Component({
  selector: 'goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    
  }

  openAddGoal(){
    this.store.dispatch(new RedirectToAction('goals/add'));
  }

  
}
