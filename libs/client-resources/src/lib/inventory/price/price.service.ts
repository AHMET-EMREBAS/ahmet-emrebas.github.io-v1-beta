import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { ConfirmationService, MenuItem } from 'primeng/api';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Price } from './price.interface';

import { SkuService } from '../sku';

import { PricelevelService } from '../pricelevel';

@Injectable()
export class PriceService extends NgrxDataService<Price> {
  public override columns: { header: string; field: keyof Price }[] = [
    { field: 'price', header: 'Price' },

    { field: 'cost', header: 'Cost' },

    { field: 'sku', header: 'Sku' },

    { field: 'pricelevel', header: 'Price Level' },
  ];

  public override globalFilterFields: string[] = [
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
        this.router.navigate(['/price/update', this.contextMenuSelection?.id]);
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate(['/price/delete', this.contextMenuSelection?.id]);
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

    public readonly pricelevelService: PricelevelService
  ) {
    super('Price', sef, httpClient, router, confirmService);
  }
}
