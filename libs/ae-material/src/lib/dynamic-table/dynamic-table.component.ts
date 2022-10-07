import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  MenuItem,
  SortEvent,
} from 'primeng/api';
import { Table } from 'primeng/table';

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
  globalFilterFields: string[] = ['id'];
  contextMenuItems: MenuItem[] = [{ label: 'New', icon: 'pi pi-plus' }];

  selectedItems!: Record<string, any>[];

  contextMenuSelection!: Record<string, any>;

  // @ViewChild('dt1') dt1!: Table;

  columns: TableColumn[] = [
    { header: '#', field: 'id' },
    { header: 'Name', field: 'name', sortable: true },
    { header: 'Price Level', field: 'priceLevel' },
  ];

  visibleColumns = this.columns;

  totalRecord = 200;

  filteredEntities$ = this.dataService.entities$;

  constructor(
    @Inject(DynamicTableService.name)
    public readonly dataService: DynamicTableService<Record<string, any>>
  ) {}
  ngAfterViewInit(): void {
    this.dataService.getAll().subscribe((data) => {
      setTimeout(() => {
        this.table.totalRecords = 200;
      });
    });
  }

  ngOnInit(): void {}

  filter(event: any, table: Table) {
    // console.log(event);

    console.log('Rows: ', table._rows);
    console.log('Cont ', table._totalRecords);

    // console.log(table.paginator);
    // console.log(table);
    this.dataService.getWithQuery({
      take: table._first + '',
      skip: table._rows * table._first + '',

      where: JSON.stringify(table.filter),
    });
  }

  clear(table: Table) {
    table.clear();
  }

  handleFilter(event: any) {
    console.log(event);
  }

  handleSort(event: SortEvent) {
    console.log('Sort : ', event);
  }

  handleResize(event: any) {
    console.log(event);
  }

  query() {
    console.log('query');
  }

  handleOnPage(event: any) {
    console.log('Page Event : ', event);
  }
}
