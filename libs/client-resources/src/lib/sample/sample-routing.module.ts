import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { CreateSampleComponent } from './create-sample';
import { DeleteSampleComponent } from './delete-sample';
import { SampleComponent } from './sample.component';
import { TableViewSampleComponent } from './table-view-sample';
import { UpdateSampleComponent } from './update-sample';

export const routes: Routes = [
  {
    path: '',
    component: SampleComponent,

    children: [
      {
        path: 'table-view',
        component: TableViewSampleComponent,
      },
      {
        path: 'create',
        component: CreateSampleComponent,
      },
      {
        path: 'update/:id',
        component: UpdateSampleComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteSampleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
