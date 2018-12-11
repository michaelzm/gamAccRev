import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccessReviewComponent } from "./access-review/access-review.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  { path: "accessreview", component: AccessReviewComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "table", component: TableComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
