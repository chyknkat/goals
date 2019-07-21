import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals/goals.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { FormsModule } from '@angular/forms';

import { NumberInputDirective } from "../directives/number-input.directive";



@NgModule({
  declarations: [GoalsComponent, 
    AddGoalComponent, 
    EditGoalComponent, 
    GoalDetailComponent,
    NumberInputDirective],
  imports: [
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [GoalsComponent, 
    AddGoalComponent, 
    EditGoalComponent, 
    GoalDetailComponent, 
    NumberInputDirective]
})
export class GoalsModule { }
