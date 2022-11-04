import { Injectable } from '@angular/core';

import { NgrxDataService } from 'material/data-services';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Sample } from './sample.interface';

@Injectable()
export class SampleService extends NgrxDataService<Sample> {
  public override columns: { header: string; field: string }[] = [
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

  public override globalFilterFields: string[] = ['name'];

  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Sample', sef);
  }
}
