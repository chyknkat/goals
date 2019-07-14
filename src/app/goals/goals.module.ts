import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals/goals.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';


@NgModule({
  declarations: [GoalsComponent, AddGoalComponent, EditGoalComponent, GoalDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [GoalsComponent, AddGoalComponent, EditGoalComponent, GoalDetailComponent]
})
export class GoalsModule { }
