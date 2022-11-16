import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadQuantity } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class QuantityService extends NgrxBaseCollecitonService<
  Partial<IReadQuantity>
> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Quantity', sef, httpClient);
  }
}
