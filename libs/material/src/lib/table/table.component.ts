import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';

import { fadeInOnEnterAnimation } from 'angular-animations';
import { Table } from 'primeng/table';

import { NgrxDataService } from '../data-services';

@Component({
  selector: 'ae-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class TableComponent implements AfterViewInit {
  @ViewChild('DATA_TABLE') table!: Table;

  isReady = false;
  constructor(public readonly ds: NgrxDataService<any>) {}

  ngAfterViewInit(): void {
    this.isReady = true;
    this.loadData();
  }

  trackBy(e: any) {
    return e.id;
  }

  loadData(event?: any) {
    if (this.isReady) {
      this.ds.first$.next(this.table.first);
      this.ds.rows$.next(this.table.rows);
      this.ds.sortOrder$.next(this.table.sortOrder);
      this.ds.sortField$.next(this.table.sortField);

      this.ds.getWithQuery({
        take: this.table.rows + '',
        skip: this.table.first + '',
        sortField: this.table.sortField,
        sortOrder: this.table.sortOrder === -1 ? 'DESC' : 'ASC',
      });
    }
  }
}
