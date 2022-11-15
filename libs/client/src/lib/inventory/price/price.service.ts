import { Injectable } from '@angular/core';

import { IReadPrice } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class PriceService extends NgrxBaseCollecitonService<
  Partial<IReadPrice>
> {
  constructor(sef: EntityCollectionServiceElementsFactory) {
    super('Price', sef);
  }
}
