import { FormGroup } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxDataService<T> extends EntityCollectionServiceBase<T> {
  readonly formGroup = new FormGroup<any>({});

  readonly actionButtonLock$ = new BehaviorSubject<boolean>(false);

  constructor(entityName: string, sef: EntityCollectionServiceElementsFactory) {
    super(entityName, sef);
  }

  hello() {
    return `Hello from , ${this.entityName}`;
  }

  lockActionButtons() {
    this.actionButtonLock$.next(true);
  }
  unlockActionButtons() {
    this.actionButtonLock$.next(false);
  }

  submit() {
    if (this.formGroup.valid) {
      this.add(this.formGroup.value);
      return;
    }
  }
}
