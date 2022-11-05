import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  Validators,
} from '@angular/forms';

import {
  FilterMetadata,
  MenuItem,
} from 'primeng/api';
import { Table } from 'primeng/table';
import {
  BehaviorSubject,
  map,
  Observable,
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

export type QueryOptions = {
  first?: number;
  rows?: number;
  sortOrder?: number;
  sortField?: string;
  where?: string;
};

export class NgrxDataService<T> extends EntityCollectionServiceBase<T> {
  contextMenuSelection?: T;

  contextMenuItems: MenuItem[] = [
    {
      icon: 'pi pi-info-circle',
      label: 'Hi',
      command: () => {
        console.log(this.contextMenuSelection);
      },
    },
  ];

  selection!: T[];

  readonly searchControl = new FormControl('', Validators.maxLength(50));
  public columns: { header: string; field: string }[] = [];
  public globalFilterFields: string[] = ['uuid'];
  readonly actionButtonLock$ = new BehaviorSubject<boolean>(false);

  constructor(
    entityName: string,
    sef: EntityCollectionServiceElementsFactory,
    private readonly httpClient: HttpClient
  ) {
    super(entityName, sef);
  }
  lockActionButtons() {
    this.actionButtonLock$.next(true);
  }
  unlockActionButtons() {
    this.actionButtonLock$.next(false);
  }

  query(table: Table) {
    this.getWithQuery({
      take: table.rows + '',
      skip: table.first + '',
      sortField: table.sortField,
      sortOrder: table.sortOrder == 1 ? 'ASC' : 'DESC',
      where: JSON.stringify({
        global: { value: this.searchControl.value, matchMode: 'contains' },
        ...table.filters,
      }),
    });
  }

  count(): Observable<number> {
    return this.httpClient
      .patch(`/api/${this.entityName.toLowerCase()}`, {})
      .pipe(
        map((c) => {
          return c;
        })
      ) as Observable<number>;
  }
}
