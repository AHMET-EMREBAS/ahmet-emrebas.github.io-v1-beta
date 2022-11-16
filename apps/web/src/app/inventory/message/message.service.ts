import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadMessage } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

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
