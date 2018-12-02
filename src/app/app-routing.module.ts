import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessReviewComponent } from './access-review/access-review.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'accessreview', component: AccessReviewComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
