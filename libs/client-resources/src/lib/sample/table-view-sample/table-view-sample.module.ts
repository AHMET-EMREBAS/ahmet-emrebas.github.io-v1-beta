import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { SampleService } from '../sample.service';
import { TableViewSampleComponent } from './table-view-sample.component';

@NgModule({
  declarations: [TableViewSampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    ButtonModule,
    ContextMenuModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
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
