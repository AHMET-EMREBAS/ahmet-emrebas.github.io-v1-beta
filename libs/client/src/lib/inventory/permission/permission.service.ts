import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadPermission } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class PermissionService extends NgrxBaseCollecitonService<
  Partial<IReadPermission>
> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Permission', sef, httpClient);
  }
}
