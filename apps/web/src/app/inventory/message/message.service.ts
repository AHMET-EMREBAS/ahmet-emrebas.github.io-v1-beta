import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IReadMessage } from 'common/inventory/interfaces';
import { NgrxBaseCollecitonService } from 'material/ngrx';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class MessageService extends NgrxBaseCollecitonService<
  Partial<IReadMessage>
> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Message', sef, httpClient);
  }
}
