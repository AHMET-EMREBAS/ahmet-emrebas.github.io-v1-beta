import { HttpClient } from '@angular/common/http';

import { BaseInterface } from 'common/base';
import { Table } from 'primeng/table';
import {
  BehaviorSubject,
  debounceTime,
  delay,
  Observable,
  switchMap,
} from 'rxjs';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class NgrxBaseCollecitonService<
  T extends BaseInterface
> extends EntityCollectionServiceBase<T> {
  table!: Table;
  private readonly newQuery$ = new BehaviorSubject<any>({});

  private readonly selections$ = new BehaviorSubject<T[]>([]);

  readonly allCount$ = this.newQuery$.pipe(
    delay(400),
    debounceTime(400),
    switchMap(() => {
      return this.httpClient?.patch<number>(
        `api/${this.entityName.toLowerCase()}/?query=count&${Object.entries(
          this.getQuery(this.table)
        )
          .map((e) => e.join('='))
          .join('&')}`,
        {}
      ) as Observable<number>;
    })
  );

  constructor(
    entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private readonly httpClient?: HttpClient
  ) {
    super(entityName, serviceElementsFactory);
  }

  updateSelection(items: T[]) {
    this.selections$.next([...items]);
  }

  getItemToBeUpdated() {
    const selectedItems = this.selections$.getValue();
    const updatedItem = selectedItems.pop();
    this.selections$.next(selectedItems);
    return updatedItem;
  }

  deleteItem() {
    const d = this.selections$.getValue().pop();
    if (d) {
      this.delete(d);
    }
  }

  query(table: Table) {
    this.table = table;
    this.clearCache();
    this.getWithQuery(this.getQuery(table));
    this.newQuery$.next({});
  }

  private getQuery(table: Table) {
    return {
      view: 'true',
      take: table.rows + '',
      skip: table.first + '',
      sortOrder: table.sortOrder + '',
      sortField: table.sortField || 'id',
      where: JSON.stringify(table.filters),
    };
  }
}
