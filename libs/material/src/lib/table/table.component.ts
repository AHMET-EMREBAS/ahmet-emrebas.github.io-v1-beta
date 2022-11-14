import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { FilterMetadata } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

export type ColumnOption = {
  header: string;
  field: string;
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
export class TableComponent {
  searchControl = new FormControl('');
  selectedItems = [];
  selectedItems$ = new BehaviorSubject<any>([]);

  @Input() data: Record<string, any>[] = [];

  @Input() columns: ColumnOption[] = [
    { header: '#', field: 'id' },
    { header: 'uuid', field: 'uuid' },
  ];

  @Output() sortEvent = new EventEmitter<SortEvent>();
  @Output() filterEvent = new EventEmitter<FilterEvent>();
  @Output() pageEvent = new EventEmitter<PageEvent>();
  @Output() selectEvent = new EventEmitter<Record<string, any>[]>();
  @Output() editEvent = new EventEmitter<Record<string, any>[]>();
  @Output() newEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<Record<string, any>[]>();
}
