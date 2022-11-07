import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { ConfirmationService, MenuItem } from 'primeng/api';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Order } from './order.interface';

import { ProductService } from '../product';

import { PricelevelService } from '../pricelevel';

import { TransactionService } from '../transaction';

@Injectable()
export class OrderService extends NgrxDataService<Order> {
  public override columns: { header: string; field: keyof Order }[] = [
    { field: 'quantity', header: 'QUANTITY' },

    { field: 'product', header: 'PRODUCT' },

    { field: 'pricelevel', header: 'PRICELEVEL' },

    { field: 'transaction', header: 'TRANSACTION' },
  ];

  public override globalFilterFields: string[] = [
    'id',

    'uuid',

    'quantity',

    'product',

    'pricelevel',

    'transaction',
  ];

  public override contextMenuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate(['update', this.contextMenuSelection?.id]);
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate(['delete', this.contextMenuSelection?.id]);
      },
    },
    {
      separator: true,
    },
    {
      label: 'Copy',
      icon: 'pi pi-copy',
      command: () => {
        this.clipboard.copy(
          Object.entries(this.contextMenuSelection || {})
            .map(([key, value]) => `${key}:${value}`)
            .join('\n')
        );
      },
    },
  ];

  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient,
    private readonly clipboard: Clipboard,
    router: Router,
    confirmService: ConfirmationService,

    public readonly productService: ProductService
  ) {
    super(
      'Order',
      sef,
      httpClient,
      router,
      confirmService,

      productService
    );
  }
}
