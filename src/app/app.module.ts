import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccessReviewComponent } from "./access-review/access-review.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";
import { TableRowComponent } from "./table-row/table-row.component";
import { MaterialModule } from "./material";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FormularComponent } from './formular/formular.component';
import { AccessListComponent } from './access-list/access-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessReviewComponent,
    EmployeeDetailComponent,
    DashboardComponent,
    LoginComponent,
    TableComponent,
    TableRowComponent,
    ProgressBarComponent,
    FormularComponent,
    AccessListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
