import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { SampleComponent } from './sample.component';

export const routes: Routes = [
  {
    path: '',
    component: SampleComponent,

    children: [
      {
        path: 'table-view',
        loadChildren: () =>
          import('./table-view-sample/table-view-sample.module').then(
            (m) => m.TableViewSampleModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create-sample/create-sample.module').then(
            (m) => m.CreateSampleModule
          ),
      },
      {
        path: 'update',
        loadChildren: () =>
          import('./update-sample/update-sample.module').then(
            (m) => m.UpdateSampleModule
          ),
      },
      {
        path: 'delete',
        loadChildren: () =>
          import('./delete-sample/delete-sample.module').then(
            (m) => m.DeleteSampleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
