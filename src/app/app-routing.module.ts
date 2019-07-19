import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals/goals.component';
import { AddGoalComponent } from './goals/add-goal/add-goal.component';
import { EditGoalComponent } from './goals/edit-goal/edit-goal.component';

const routes: Routes = [
    { path: '', component: GoalsComponent },
    { path: 'goals/add', component: AddGoalComponent },
    { path: 'goals/edit', component: EditGoalComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(
      routes,
      {
        onSameUrlNavigation: 'reload',
        //enableTracing: true // <-- debugging purposes only
      })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }