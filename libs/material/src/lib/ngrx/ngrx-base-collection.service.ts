import { HttpClient } from '@angular/common/http';

import { BaseInterface } from 'common/base';
import { uniqBy } from 'lodash';
import { Table } from 'primeng/table';
import {
  BehaviorSubject,
  debounceTime,
  delay,
  map,
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
      this.delete(d.id as any);
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

  uniqueBy(key: keyof T & string) {
    return this.entities$.pipe(map((data) => uniqBy(data, (e) => e[key])));
  }

  getAsOptions(keys: (keyof T & string)[]) {
    return this.getWithQuery({
      select: JSON.stringify(keys),
    });
  }
}
