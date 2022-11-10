import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { ConfirmationService, MenuItem } from 'primeng/api';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Order } from './order.interface';

import { SkuService } from '../sku';

import { StoreService } from '../store';

import { TransactionService } from '../transaction';

@Injectable()
export class OrderService extends NgrxDataService<Order> {
  public override columns: { header: string; field: keyof Order }[] = [
    { field: 'quantity', header: 'Quantity' },

    { field: 'unitprice', header: 'Unitprice' },

    { field: 'discount', header: 'Discount' },

    { field: 'taxExempt', header: 'Tax Exempt' },

    { field: 'sku', header: 'Sku' },

    { field: 'store', header: 'Store' },

    { field: 'transaction', header: 'Transaction' },
  ];

  public override globalFilterFields: string[] = [
    '[object Object]',

    '[object Object]',

    '[object Object]',

    '[object Object]',

    '[object Object]',

    '[object Object]',

    '[object Object]',
  ];

  public override contextMenuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate(['/order/update', this.contextMenuSelection?.id]);
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate(['/order/delete', this.contextMenuSelection?.id]);
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

    public readonly skuService: SkuService,

    public readonly storeService: StoreService,

    public readonly transactionService: TransactionService
  ) {
    super('Order', sef, httpClient, router, confirmService);
  }
}
