import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadPricelevel } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class PricelevelService extends NgrxBaseCollecitonService<
  Partial<IReadPricelevel>
> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Pricelevel', sef, httpClient);
  }
}
