import { Injectable } from '@angular/core';

import { IReadQuantity } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class QuantityService extends NgrxBaseCollecitonService<
  Partial<IReadQuantity>
> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Quantity', sef);
  }
}
