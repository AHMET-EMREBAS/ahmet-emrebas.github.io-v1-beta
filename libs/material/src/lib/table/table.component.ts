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

  constructor(public readonly ds: NgrxDataService<any>) {}

  ngAfterViewInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.ds.clearCache();
  }
  trackBy(e: any) {
    return e.id;
  }

  loadData() {
    this.ds.getWithQuery({
      take: this.table.rows + '',
      skip: this.table.first + '',
      sortField: this.table.sortField,
      sortOrder: this.table.sortOrder == 1 ? 'ASC' : 'DESC',
      where: JSON.stringify({
        global: { value: this.ds.searchControl.value, matchMode: 'contains' },
        ...this.table.filters,
      }),
    });
  }

  clearCache() {
    this.ds.clearCache();
  }
}
