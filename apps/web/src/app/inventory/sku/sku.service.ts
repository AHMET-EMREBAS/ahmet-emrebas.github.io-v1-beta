import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadSku } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class SkuService extends NgrxBaseCollecitonService<Partial<IReadSku>> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Sku', sef, httpClient);
  }
}
