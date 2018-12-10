import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule ,MatPaginatorModule, 
    MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatPaginatorModule, MatTableModule],
})
export class MaterialModule { }