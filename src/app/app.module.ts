import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccessReviewComponent } from "./access-review/access-review.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";
import { TableRowComponent } from "./table-row/table-row.component";
import { MaterialModule } from "./material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormularComponent } from "./formular/formular.component";
import { AccessListComponent } from "./access-list/access-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FinishedBottomSheetComponent } from "./finished-bottom-sheet/finished-bottom-sheet.component";
import { MatSelectModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    AccessReviewComponent,
    EmployeeDetailComponent,
    LoginComponent,
    TableComponent,
    TableRowComponent,
    FormularComponent,
    AccessListComponent,
    FinishedBottomSheetComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule
  ],
  entryComponents: [FinishedBottomSheetComponent],
  providers: [AccessReviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
