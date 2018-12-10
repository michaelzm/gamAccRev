import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule ,MatPaginatorModule, 
    MatTableModule, MatTabsModule, MatSnackBarModule,
    MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, 
    MatPaginatorModule, MatTableModule, MatTabsModule,
    MatInputModule, MatSnackBarModule],
})
export class MaterialModule { }