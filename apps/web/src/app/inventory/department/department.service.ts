import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IReadDepartment } from 'common/inventory/interfaces';

import { NgrxBaseCollecitonService } from 'material/ngrx';

import { of } from 'rxjs';

import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class DepartmentService extends NgrxBaseCollecitonService<
  Partial<IReadDepartment>
> {
  constructor(
    sef: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Department', sef, httpClient);
  }
}
