import { Component, ViewChild, AfterViewInit } from '@angular/core';
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
export class ViewPriceComponent implements AfterViewInit {
  @ViewChild('dataTable') dataTable!: TableComponent;
  rows = 10;
  first = 0;
  filters = [];
  sort = [];

  totalRecords$ = this.priceService.allCount$;
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
  ) {}

  ngAfterViewInit(): void {
    this.priceService.query(this.dataTable.table);
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

  handleEvent() {
    this.priceService.query(this.dataTable.table);
  }
}
