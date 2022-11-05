import { Component } from '@angular/core';

import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'ae-table-view-sample',
  templateUrl: './table-view-sample.component.html',
  styleUrls: ['./table-view-sample.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class TableViewSampleComponent {}
