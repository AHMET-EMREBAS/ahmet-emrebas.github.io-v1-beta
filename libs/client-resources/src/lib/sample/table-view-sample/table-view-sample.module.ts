import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableViewSampleComponent } from './table-view-sample.component';

@NgModule({
  declarations: [TableViewSampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TableViewSampleComponent }]),
  ],
})
export class TableViewSampleModule {}
