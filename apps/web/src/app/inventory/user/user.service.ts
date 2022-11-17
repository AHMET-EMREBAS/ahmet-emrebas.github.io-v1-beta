import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IReadUser } from 'common/inventory/interfaces';
import { NgrxBaseCollecitonService } from 'material/ngrx';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class UserService extends NgrxBaseCollecitonService<Partial<IReadUser>> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('User', sef, httpClient);
  }
}
