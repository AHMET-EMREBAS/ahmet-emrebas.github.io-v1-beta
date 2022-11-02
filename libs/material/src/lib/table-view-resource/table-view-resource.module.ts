import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableViewResourceComponent } from './table-view-resource.component';

@NgModule({
  declarations: [TableViewResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TableViewResourceComponent },
    ]),
  ],
})
export class TableViewResourceModule {}
