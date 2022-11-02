import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  StatisticViewSampleComponent,
} from './statistic-view-sample.component';

@NgModule({
  declarations: [StatisticViewSampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StatisticViewSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material').then((m) => m.StatisticViewResourceModule),
          },
        ],
      },
    ]),
  ],
})
export class StatisticViewSampleModule {}
