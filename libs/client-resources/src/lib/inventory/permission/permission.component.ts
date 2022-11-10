/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { map } from 'rxjs';

import { EntityOp } from '@ngrx/data';

import { isPermissionActionType } from './is-permission-action-type';
import { PermissionService } from './permission.service';

@Component({
  selector: 'ae-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
})
export class PermissionComponent implements OnInit, OnDestroy {
  sub = this.ss.entityActions$
    .pipe(
      map((action) => {
        if (
          isPermissionActionType(action.type, EntityOp.SAVE_ADD_ONE_SUCCESS)
        ) {
          this.successMessage('Created item.');
          this.tableView();
        }

        if (
          isPermissionActionType(action.type, EntityOp.SAVE_DELETE_ONE_SUCCESS)
        ) {
          this.successMessage('Deleted item');

          this.tableView();
        }

        if (
          isPermissionActionType(action.type, EntityOp.SAVE_UPDATE_ONE_SUCCESS)
        ) {
          this.successMessage('Updated item');
          this.tableView();
        }

        if (isPermissionActionType(action.type, EntityOp.SAVE_ADD_ONE_ERROR)) {
          this.errorMessage(action.payload.data.error.message);
        }
      })
    )
    .subscribe();

  constructor(
    private readonly ss: PermissionService,
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
    this.router.navigate(['/permission/table-view']);
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
