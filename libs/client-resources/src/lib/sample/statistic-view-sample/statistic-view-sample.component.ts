import {
  Component,
  OnInit,
} from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'ae-statistic-view-sample',
  templateUrl: './statistic-view-sample.component.html',
  styleUrls: ['./statistic-view-sample.component.scss'],
})
export class StatisticViewSampleComponent implements OnInit {
  data: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

    datasets: [
      {
        label: 'First Dataset',
        backgroundColor: [
          'orange',
          'blue',
          'yellow',
          'teal',
          'cyan',
          'purple',
          'royalblue',
        ],
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
