import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccessReviewComponent } from "./access-review/access-review.component";
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";
import { FormularComponent } from "./formular/formular.component";

const routes: Routes = [
  {
    path: "accessreview",
    component: AccessReviewComponent
  },
  { path: "start", component: LoginComponent },
  { path: "table", component: TableComponent },
  { path: "formular", component: FormularComponent },
  { path: "", redirectTo: "/start", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
