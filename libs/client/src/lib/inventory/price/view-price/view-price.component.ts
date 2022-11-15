import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IReadPrice,
  IReadSku,
  IReadPricelevel,
} from 'common/inventory/interfaces';
import {
  ColumnOption,
  FilterEvent,
  PageEvent,
  SortEvent,
  TableComponent,
} from 'material/table';

import { PriceService } from '../price.service';

import { SkuService } from '../../sku';

import { PricelevelService } from '../../pricelevel';

@Component({
  selector: 'ae-view-price',
  templateUrl: './view-price.component.html',
  styleUrls: ['./view-price.component.scss'],
})
export class ViewPriceComponent {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  items$ = this.priceService.entities$;

  columns: ColumnOption<IReadPrice>[] = [
    {
      header: '#',
      field: 'id',
    },
    {
      header: 'UUID',
      field: 'uuid',
    },

    {
      header: 'price',
      field: 'price',
    },

    {
      header: 'cost',
      field: 'cost',
    },

    {
      header: 'sku',
      field: 'sku',
      mapper: (item?: IReadSku) => item?.name,
    },

    {
      header: 'pricelevel',
      field: 'pricelevel',
      mapper: (item?: IReadPricelevel) => item?.name,
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
    private readonly priceService: PriceService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,

    private readonly skuService: SkuService,
    private readonly pricelevelService: PricelevelService
  ) {
    this.priceService.getAll();
    this.skuService.getAll();
    this.pricelevelService.getAll();
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
    this.priceService.updateSelection([...event]);
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
      this.priceService.clearCache();
      this.priceService.getWithQuery({
        take: table.rows + '',
        skip: table.first + '',
        where: JSON.stringify(table.filters),
        sortField: table.sortField,
        sortOrder: table.sortOrder + '',
      });
    });
  }
}
