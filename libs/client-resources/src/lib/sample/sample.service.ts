import { Injectable } from '@angular/core';

import { NgrxDataService } from 'material/data-services';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Sample } from './sample.interface';

@Injectable()
export class SampleService extends NgrxDataService<Sample> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Sample', sef);
  }
}
