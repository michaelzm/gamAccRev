import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatPaginatorModule
} from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSliderModule } from "@angular/material/slider";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatSnackBarModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatStepperModule,
    MatToolbarModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatDialogModule,
    MatRadioModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatStepperModule,
    MatToolbarModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatDialogModule,
    MatRadioModule,
    MatCardModule
  ]
})
export class MaterialModule {}
