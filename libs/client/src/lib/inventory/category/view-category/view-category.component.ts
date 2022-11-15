import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IReadCategory } from 'common/inventory/interfaces';
import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ae-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  items$ = this.categoryService.entities$;

  columns: ColumnOption<IReadCategory>[] = [
    {
      header: '#',
      field: 'id',
    },
    {
      header: 'UUID',
      field: 'uuid',
    },

    {
      header: 'Category name',
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
    private readonly categoryService: CategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.categoryService.getAll();
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
    this.categoryService.updateSelection([...event]);
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
      this.categoryService.clearCache();
      this.categoryService.getWithQuery({
        take: table.rows + '',
        skip: table.first + '',
        where: JSON.stringify(table.filters),
        sortField: table.sortField,
        sortOrder: table.sortOrder + '',
      });
    });
  }
}
