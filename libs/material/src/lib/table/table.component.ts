import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';

import { fadeInOnEnterAnimation } from 'angular-animations';
import { Table } from 'primeng/table';
import {
  debounceTime,
  merge,
  tap,
} from 'rxjs';

import { NgrxDataService } from '../data-services';

@Component({
  selector: 'ae-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class TableComponent implements AfterViewInit {
  totalRecords = this.ds.count();
  @ViewChild('DATA_TABLE') table!: Table;

  constructor(public readonly ds: NgrxDataService<any>) {}

  ngAfterViewInit(): void {
    this.loadData();

    merge(
      this.table.onPage,
      this.table.onFilter.pipe(
        debounceTime(1000),
        tap(() => (this.table.first = 0))
      ),
      this.ds.searchControl.valueChanges.pipe(
        debounceTime(1000),
        tap(() => (this.table.first = 0))
      ),
      this.table.onSort
    ).subscribe(() => {
      this.loadData();
    });
  }

  trackBy(e: any) {
    return e.id;
  }

  loadData() {
    this.clearCache();
    this.ds.query(this.table);
  }

  clearCache() {
    this.ds.clearCache();
  }

  clearFilter() {
    this.table.clear();
    this.ds.searchControl.setValue('');
  }
}
