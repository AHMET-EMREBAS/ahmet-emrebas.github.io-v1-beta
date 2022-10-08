import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  ConfirmationService,
  MenuItem,
} from 'primeng/api';
import { Table } from 'primeng/table';
import { BehaviorSubject } from 'rxjs';

import { DynamicTableService } from './dynamic-table.service';

export interface DynamicTableOptions {
  globalFilterFields: string[];
}

export type TableColumn = {
  field: string;
  header: string;
  sortable?: boolean;
  editable?: boolean;
};

@Component({
  selector: 'ae-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit, AfterViewInit {
  @ViewChild('dt1') table!: Table;
  globalFilterControl = new FormControl('');

  withDeleted = false;
  @Input() globalFilterFields: string[] = ['id', 'name', 'priceLevel'];
  @Input() contextMenuItems: MenuItem[] = [
    { label: 'New', icon: 'pi pi-plus' },
  ];

  selectedItems: Record<string, any>[] = [];

  contextMenuSelection: Record<string, any> = {};

  // @ViewChild('dt1') dt1!: Table;

  columns: TableColumn[] = [
    { header: '#', field: 'id' },
    { header: 'Name', field: 'name', sortable: true },
    { header: 'Price Level', field: 'priceLevel' },
  ];

  visibleColumns = this.columns;
  data$ = this.dataService.filteredEntities$;

  change$ = new BehaviorSubject<any>({});

  constructor(
    @Inject(DynamicTableService.name)
    public readonly dataService: DynamicTableService<Record<string, any>>,
    private readonly confirmService: ConfirmationService
  ) {}

  ngAfterViewInit(): void {
    this.dataService.getAll();
  }

  ngOnInit(): void {
    console.log('Table init');
  }

  deleteSelection() {
    const item = this.selectedItems.shift();

    if (item)
      this.confirmService.confirm({
        message: 'Are you sure to delete the item with id ' + item['id'] + '?',
        accept: () => {
          this.dataService.delete(item['id']);
          setTimeout(() => {
            this.deleteSelection();
          }, 400);
        },
        reject: () => {
          setTimeout(() => {
            this.deleteSelection();
          }, 400);
        },
      });
  }

  clear(table: Table) {
    table.clear();
  }

  filter() {
    this.table.filterGlobal(this.globalFilterControl.value, 'contains');
  }
}
