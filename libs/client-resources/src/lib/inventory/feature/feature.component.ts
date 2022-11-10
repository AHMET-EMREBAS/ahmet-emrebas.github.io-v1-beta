/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { map } from 'rxjs';

import { EntityOp } from '@ngrx/data';

import { isFeatureActionType } from './is-feature-action-type';
import { FeatureService } from './feature.service';

@Component({
  selector: 'ae-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit, OnDestroy {
  sub = this.ss.entityActions$
    .pipe(
      map((action) => {
        if (isFeatureActionType(action.type, EntityOp.SAVE_ADD_ONE_SUCCESS)) {
          this.successMessage('Created item.');
          this.tableView();
        }

        if (
          isFeatureActionType(action.type, EntityOp.SAVE_DELETE_ONE_SUCCESS)
        ) {
          this.successMessage('Deleted item');

          this.tableView();
        }

        if (
          isFeatureActionType(action.type, EntityOp.SAVE_UPDATE_ONE_SUCCESS)
        ) {
          this.successMessage('Updated item');
          this.tableView();
        }

        if (isFeatureActionType(action.type, EntityOp.SAVE_ADD_ONE_ERROR)) {
          this.errorMessage(action.payload.data.error.message);
        }
      })
    )
    .subscribe();

  constructor(
    private readonly ss: FeatureService,
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
    this.router.navigate(['/feature/table-view']);
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
