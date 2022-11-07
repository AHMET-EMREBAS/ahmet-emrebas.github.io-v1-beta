/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { map } from 'rxjs';

import { EntityOp } from '@ngrx/data';

import { isStoreActionType } from './is-store-action-type';
import { StoreService } from './store.service';

@Component({
  selector: 'ae-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit, OnDestroy {
  sub = this.ss.entityActions$
    .pipe(
      map((action) => {
        if (isStoreActionType(action.type, EntityOp.SAVE_ADD_ONE_SUCCESS)) {
          this.successMessage('Created item.');
          this.tableView();
        }

        if (isStoreActionType(action.type, EntityOp.SAVE_DELETE_ONE_SUCCESS)) {
          this.successMessage('Deleted item');

          this.tableView();
        }

        if (isStoreActionType(action.type, EntityOp.SAVE_UPDATE_ONE_SUCCESS)) {
          this.successMessage('Updated item');
          this.tableView();
        }

        if (isStoreActionType(action.type, EntityOp.SAVE_ADD_ONE_ERROR)) {
          this.errorMessage(action.payload.data.error.message);
        }
      })
    )
    .subscribe();

  constructor(
    private readonly ss: StoreService,
    private readonly ms: MessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    setTimeout(() => {
      this.sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  tableView() {
    this.router.navigate(['/store/table-view']);
  }

  successMessage(msg: string) {
    this.ms.add({
      severity: 'success',
      detail: msg,
      icon: 'pi pi-check',
    });
  }

  errorMessage(msg: string) {
    this.ms.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
      icon: 'pi pi-times',
    });
  }
}