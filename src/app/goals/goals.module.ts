import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals/goals.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [GoalsComponent]
})
export class GoalsModule { }
