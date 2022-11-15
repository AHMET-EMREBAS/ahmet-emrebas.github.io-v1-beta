import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IReadQuantity,
  IReadSku,
  IReadStore,
} from 'common/inventory/interfaces';
import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';

import { QuantityService } from '../quantity.service';

import { SkuService } from '../../sku';

import { StoreService } from '../../store';

@Component({
  selector: 'ae-view-quantity',
  templateUrl: './view-quantity.component.html',
  styleUrls: ['./view-quantity.component.scss'],
})
export class ViewQuantityComponent {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  items$ = this.quantityService.entities$;

  columns: ColumnOption<IReadQuantity>[] = [
    {
      header: '#',
      field: 'id',
    },
    {
      header: 'UUID',
      field: 'uuid',
    },

    {
      header: 'quantity',
      field: 'quantity',
    },

    {
      header: 'sku',
      field: 'sku',
      mapper: (item?: IReadSku) => item?.name,
    },

    {
      header: 'store',
      field: 'store',
      mapper: (item?: IReadStore) => item?.name,
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
    private readonly quantityService: QuantityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,

    private readonly skuService: SkuService,
    private readonly storeService: StoreService
  ) {
    this.quantityService.getAll();
    this.skuService.getAll();
    this.storeService.getAll();
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
    this.quantityService.updateSelection([...event]);
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
      this.quantityService.clearCache();
      this.quantityService.getWithQuery({
        take: table.rows + '',
        skip: table.first + '',
        where: JSON.stringify(table.filters),
        sortField: table.sortField,
        sortOrder: table.sortOrder + '',
      });
    });
  }
}
