import { Injectable } from '@angular/core';

import {
  DynamicTableService,
  HttpClientService,
} from 'ae-material';
import { IStore } from 'commonjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class StoreService extends DynamicTableService<IStore> {
  constructor(
    ef: EntityCollectionServiceElementsFactory,
    httpClientService: HttpClientService
  ) {
    super('Store', ef, httpClientService);
  }
}
