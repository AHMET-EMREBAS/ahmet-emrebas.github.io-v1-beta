import {
  FormControl,
  Validators,
} from '@angular/forms';

import { FilterMetadata } from 'primeng/api';
import {
  BehaviorSubject,
  map,
  merge,
  switchMap,
} from 'rxjs';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export type FilterEvent<T> = {
  filteredValue: T[];
  filters: Record<keyof T, FilterMetadata[]> & { global: FilterMetadata };
};

export type SortEvent = { field: string; order: -1 | 1 | 0 };

export type PageEvent = { first: number; row: number };

export class NgrxDataService<T> extends EntityCollectionServiceBase<T> {
  readonly first$ = new BehaviorSubject<number>(0);
  readonly rows$ = new BehaviorSubject<number>(2);
  readonly sortField$ = new BehaviorSubject<string>('');
  readonly sortOrder$ = new BehaviorSubject<number>(1);

  pageData$ = merge([this.first$, this.rows$]).pipe(
    switchMap(() => {
      return this.entities$.pipe(
        map((data) => {
          return data
            .sort((a: any, b: any) => {
              const so = this.sortOrder$.getValue();
              const sf = this.sortField$.getValue();
              return (a[sf] < b[sf] ? -1 : 1) * so;
            })
            .slice(
              this.first$.getValue(),
              this.first$.getValue() + this.rows$.getValue()
            );
        })
      );
    })
  );

  readonly searchControl = new FormControl('', Validators.maxLength(50));
  public columns: { header: string; field: string }[] = [];
  public globalFilterFields: string[] = [];
  readonly actionButtonLock$ = new BehaviorSubject<boolean>(false);

  constructor(entityName: string, sef: EntityCollectionServiceElementsFactory) {
    super(entityName, sef);
  }
  lockActionButtons() {
    this.actionButtonLock$.next(true);
  }
  unlockActionButtons() {
    this.actionButtonLock$.next(false);
  }
}
