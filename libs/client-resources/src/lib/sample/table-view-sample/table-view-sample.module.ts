import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { TableModule } from 'material/table';

import { SampleService } from '../sample.service';
import { TableViewSampleComponent } from './table-view-sample.component';

@NgModule({
  declarations: [TableViewSampleComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([
      {
        path: '',
        component: TableViewSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material/table-view-resource').then(
                (m) => m.TableViewResourceModule
              ),
          },
        ],
      },
    ]),
  ],
  providers: [{ provide: NgrxDataService, useClass: SampleService }],
})
export class TableViewSampleModule {}
