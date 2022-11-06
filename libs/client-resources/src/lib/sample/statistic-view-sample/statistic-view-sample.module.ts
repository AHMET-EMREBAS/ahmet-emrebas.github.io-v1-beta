import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartModule } from 'primeng/chart';

import {
  StatisticViewSampleComponent,
} from './statistic-view-sample.component';

@NgModule({
  declarations: [StatisticViewSampleComponent],
  imports: [
    CommonModule,
    ChartModule,
    RouterModule.forChild([
      {
        path: '',
        component: StatisticViewSampleComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('material/statistic-view-resource').then(
                (m) => m.StatisticViewResourceModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class StatisticViewSampleModule {}
