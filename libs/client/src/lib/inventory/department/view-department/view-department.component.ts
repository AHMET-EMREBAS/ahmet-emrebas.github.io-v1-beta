import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IReadDepartment } from 'common/inventory/interfaces';
import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';

import { DepartmentService } from '../department.service';

@Component({
  selector: 'ae-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss'],
})
export class ViewDepartmentComponent {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  items$ = this.departmentService.entities$;

  columns: ColumnOption<IReadDepartment>[] = [
    {
      header: '#',
      field: 'id',
    },
    {
      header: 'UUID',
      field: 'uuid',
    },

    {
      header: 'Department name',
      field: 'name',
    },

    {
      header: 'Create Time',
      field: 'createdAt',
    },
    {
      header: 'Update Time',
      field: 'updatedAt',
    },
    {
      header: 'Delete Time',
      field: 'deletedAt',
    },
  ];

  constructor(
    private readonly departmentService: DepartmentService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.departmentService.getAll();
  }

  newItem() {
    this.goTo('create');
  }

  editItems() {
    this.goTo('update');
  }

  deleteItems(event: any) {
    this.goTo('delete');
  }

  goTo(
    path: 'create' | 'update' | 'delete',
    queryParams?: Record<string, any>
  ) {
    this.router.navigate([path], { relativeTo: this.route, queryParams });
  }

  selectItems(event: any) {
    this.departmentService.updateSelection([...event]);
  }

  sortItems(event: SortEvent) {
    console.log(event);
  }

  pageData(event: PageEvent) {
    console.log(event);
  }

  filterData(event: FilterEvent) {
    console.log(event);
  }

  handleEvent() {
    setTimeout(() => {
      const table = this.dataTable.table;
      this.departmentService.clearCache();
      this.departmentService.getWithQuery({
        take: table.rows + '',
        skip: table.first + '',
        where: JSON.stringify(table.filters),
        sortField: table.sortField,
        sortOrder: table.sortOrder + '',
      });
    });
  }
}
