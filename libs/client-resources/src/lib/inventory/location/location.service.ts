import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { ConfirmationService, MenuItem } from 'primeng/api';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Location } from './location.interface';

@Injectable()
export class LocationService extends NgrxDataService<Location> {
  public override columns: { header: string; field: keyof Location }[] = [
    { field: 'location', header: 'Location' },

    { field: 'x', header: 'X' },

    { field: 'y', header: 'Y' },

    { field: 'z', header: 'Z' },
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
        this.router.navigate([
          '/location/update',
          this.contextMenuSelection?.id,
        ]);
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate([
          '/location/delete',
          this.contextMenuSelection?.id,
        ]);
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
    confirmService: ConfirmationService
  ) {
    super('Location', sef, httpClient, router, confirmService);
  }
}
