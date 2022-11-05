import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NgrxDataService } from 'material/data-services';
import { MenuItem } from 'primeng/api';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Sample } from './sample.interface';

@Injectable()
export class SampleService extends NgrxDataService<Sample> {
  public override columns: { header: string; field: keyof Sample }[] = [
    {
      field: 'id',
      header: '#',
    },
    {
      field: 'uuid',
      header: 'UUID',
    },
    {
      field: 'name',
      header: 'Sample Name',
    },
  ];

  public override globalFilterFields: string[] = ['uuid', 'name'];

  public override contextMenuItems: MenuItem[] = [
    {
      label: 'edit',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate(['update']);
      },
    },
    {
      label: 'delete',
      icon: 'pi pi-trash',
      command: () => {
        this.router.navigate(['delete']);
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
    private readonly router: Router
  ) {
    super('Sample', sef, httpClient);
  }
}
