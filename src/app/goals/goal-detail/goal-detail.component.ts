import { Component, OnInit, Input } from '@angular/core';
import { Goal } from 'src/app/reducers/goals/models/goal.model';

@Component({
  selector: 'goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;

  constructor() { }

  ngOnInit() {
  }

  edit(){}
  delete(){
    this.goal.isDeleted = true;
  }
  undoDelete(){
    this.goal.isDeleted = false;
  }

}
