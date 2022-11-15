import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadProduct } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ProductService extends NgrxBaseCollecitonService<
  Partial<IReadProduct>
> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Product', sef, httpClient);
  }
}
