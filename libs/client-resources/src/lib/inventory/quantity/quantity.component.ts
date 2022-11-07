/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { map } from 'rxjs';

import { EntityOp } from '@ngrx/data';

import { isQuantityActionType } from './is-quantity-action-type';
import { QuantityService } from './quantity.service';

@Component({
  selector: 'ae-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnInit, OnDestroy {
  sub = this.ss.entityActions$
    .pipe(
      map((action) => {
        if (isQuantityActionType(action.type, EntityOp.SAVE_ADD_ONE_SUCCESS)) {
          this.successMessage('Created item.');
        }

        if (
          isQuantityActionType(action.type, EntityOp.SAVE_DELETE_ONE_SUCCESS)
        ) {
          this.successMessage('Deleted item');

          this.tableView();
        }

        if (
          isQuantityActionType(action.type, EntityOp.SAVE_UPDATE_ONE_SUCCESS)
        ) {
          this.tableView();
        }

        if (isQuantityActionType(action.type, EntityOp.SAVE_ADD_ONE_ERROR)) {
          this.errorMessage(action.payload.data.error.message);
        }
      })
    )
    .subscribe();

  constructor(
    private readonly ss: QuantityService,
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
    this.router.navigate(['../../table-view'], { relativeTo: this.route });
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
