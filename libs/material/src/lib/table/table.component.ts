import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

export type ColumnOption = {
  header: string;
  field: string;
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

  @Output() sortEvent = new EventEmitter<{ [key: string]: string }>();
  @Output() filterEvent = new EventEmitter<any>();
  @Output() pageEvent = new EventEmitter<any>();
  @Output() selectEvent = new EventEmitter<any>();
}
