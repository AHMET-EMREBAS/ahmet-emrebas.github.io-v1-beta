import {
  AfterViewInit,
  Component,
} from '@angular/core';

import { fadeInOnEnterAnimation } from 'angular-animations';

import { NgrxDataService } from '../data-services';

@Component({
  selector: 'ae-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class TableComponent implements AfterViewInit {
  totalRecords = 1000;

  constructor(public readonly ds: NgrxDataService<any>) {}

  ngAfterViewInit(): void {
    this.ds.getAll();
  }

  trackBy(e: any) {
    return e.id;
  }
}
