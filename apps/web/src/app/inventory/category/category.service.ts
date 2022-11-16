import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadCategory } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class CategoryService extends NgrxBaseCollecitonService<
  Partial<IReadCategory>
> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Category', sef, httpClient);
  }
}
