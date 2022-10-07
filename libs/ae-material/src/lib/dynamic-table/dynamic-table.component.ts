import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import { MenuItem } from 'primeng/api';
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
export class DynamicTableComponent implements OnInit {
  globalFilterFields!: string[];

  selectedItems!: Record<string, any>[];

  contextMenuSelection!: Record<string, any>;

  contextMenuItems!: MenuItem[];

  // @ViewChild('dt1') dt1!: Table;

  columns: TableColumn[] = [
    { header: '#', field: 'id' },
    { header: 'Name', field: 'name', sortable: true },
    { header: 'Price Level', field: 'priceLevel' },
  ];

  visibleColumns = this.columns;

  filteredEntities$ = this.dataService.entities$;

  constructor(
    @Inject(DynamicTableService.name)
    public readonly dataService: DynamicTableService<Record<string, any>>
  ) {}

  ngOnInit(): void {
    console.log('Table init');
  }

  filter(event: any, table: Table) {
    console.log(event);

    console.log(table.paginator);
    console.log(table);
    this.dataService.getWithQuery('', {});
  }

  clear(table: Table) {
    table.clear();
  }

  handleFilter(event: any) {
    console.log(event);
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
