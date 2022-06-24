import { NgModule } from '@angular/core';
import { DefaultTitleStrategy, RouterModule, Routes } from '@angular/router';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

const routes: Routes = [
  {path: 'launch-details/:id', component: LaunchDetailsComponent},
  {path: '', component: LaunchCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
