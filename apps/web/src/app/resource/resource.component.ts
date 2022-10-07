import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import { IStore } from 'commonjs';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'ae-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
  tableOptions: Partial<Table> = {
    globalFilterFields: ['id', 'name', 'priceLevel'],
  };
  selectedItems = [];

  contextMenuSelection!: any;

  items: MenuItem[] = [
    {
      label: 'View',
      icon: 'pi pi-fw pi-search',
      command: () => console.log('View ', this.contextMenuSelection),
    },
    {
      label: 'Delete',
      icon: 'pi pi-fw pi-times',
      command: () => console.log('Delete ', this.contextMenuSelection),
    },
  ];

  @ViewChild('dt1') dt1!: Table;
  columns = [
    { header: '#', field: 'id' },
    { header: 'Name', field: 'name' },
    { header: 'Price Level', field: 'priceLevel' },
  ];
  selectedColumns = this.columns;

  stores$ = this.httpClient.get<IStore[]>('http://localhost:3333/api/stores');
  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.dt1.selection);
    }, 2000);
  }

  filter(event: any) {
    this.dt1.filterGlobal(event.data, 'contains');
  }

  clear() {
    this.dt1.clear();
  }

  handleFilter(event: any) {
    console.log(event);
  }

  handleResize(event: any) {
    console.log(event);
  }

  query() {}
}
