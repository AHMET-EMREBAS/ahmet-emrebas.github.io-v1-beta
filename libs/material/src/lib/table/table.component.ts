import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { FilterMetadata } from 'primeng/api';
import { Table } from 'primeng/table';
import { BehaviorSubject } from 'rxjs';

export type ColumnOption<T> = {
  header: string;
  field: string;
  mapper?: (item?: any) => any;
  prefix?: string;
  suffix?: string;
};

export type FilterEvent = {
  filteredValue?: any[];
  filters?: { [key: string]: FilterMetadata[] };
};

export type SortEvent = {
  field: string;
  order: 1 | -1;
};

export type PageEvent = {
  first: number;
  rows: number;
};
@Component({
  selector: 'ae-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  settingDialog = false;

  @ViewChild('table') table!: Table;

  searchControl = new FormControl('');
  selectedItems = [];
  selectedItems$ = new BehaviorSubject<any>([]);

  @Input() data: Record<string, any>[] = [];
  @Input() totalRecords = 1000000;

  @Input() globalFilterFields: string[] = ['id', 'uuid', 'name'];

  @Input() columns: ColumnOption<any>[] = [
    { header: '#', field: 'id' },
    { header: 'uuid', field: 'uuid' },
  ];

  visibleColumns!: ColumnOption<any>[];

  @Output() sortEvent = new EventEmitter<SortEvent>();
  @Output() filterEvent = new EventEmitter<FilterEvent>();
  @Output() pageEvent = new EventEmitter<PageEvent>();
  @Output() selectEvent = new EventEmitter<any[]>();
  @Output() editEvent = new EventEmitter();
  @Output() newEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();

  ngOnInit(): void {
    this.visibleColumns = [...this.columns];
    this.globalFilterFields = [...this.columns.map((e) => e.field)];
  }
  showSettingDialog() {
    this.settingDialog = true;
  }
}
