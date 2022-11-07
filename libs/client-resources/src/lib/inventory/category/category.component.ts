/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { map } from 'rxjs';

import { EntityOp } from '@ngrx/data';

import { isCategoryActionType } from './is-category-action-type';
import { CategoryService } from './category.service';

@Component({
  selector: 'ae-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  sub = this.ss.entityActions$
    .pipe(
      map((action) => {
        if (isCategoryActionType(action.type, EntityOp.SAVE_ADD_ONE_SUCCESS)) {
          this.successMessage('Created item.');
          this.tableView();
        }

        if (
          isCategoryActionType(action.type, EntityOp.SAVE_DELETE_ONE_SUCCESS)
        ) {
          this.successMessage('Deleted item');

          this.tableView();
        }

        if (
          isCategoryActionType(action.type, EntityOp.SAVE_UPDATE_ONE_SUCCESS)
        ) {
          this.successMessage('Updated item');
          this.tableView();
        }

        if (isCategoryActionType(action.type, EntityOp.SAVE_ADD_ONE_ERROR)) {
          this.errorMessage(action.payload.data.error.message);
        }
      })
    )
    .subscribe();

  constructor(
    private readonly ss: CategoryService,
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
    this.router.navigate(['/category/table-view']);
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
