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
        path: 'card-view',
        loadChildren: () =>
          import('./card-view-sample/card-view-sample.module').then(
            (m) => m.CardViewSampleModule
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
        path: 'update/:id',
        loadChildren: () =>
          import('./update-sample/update-sample.module').then(
            (m) => m.UpdateSampleModule
          ),
      },
      {
        path: 'delete/:id',
        loadChildren: () =>
          import('./delete-sample/delete-sample.module').then(
            (m) => m.DeleteSampleModule
          ),
      },
      {
        path: 'statistic-view',
        loadChildren: () =>
          import('./statistic-view-sample/statistic-view-sample.module').then(
            (m) => m.StatisticViewSampleModule
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
