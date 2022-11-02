import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  StatisticViewResourceComponent,
} from './statistic-view-resource.component';

@NgModule({
  declarations: [StatisticViewResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StatisticViewResourceComponent },
    ]),
  ],
})
export class StatisticViewResourceModule {}
