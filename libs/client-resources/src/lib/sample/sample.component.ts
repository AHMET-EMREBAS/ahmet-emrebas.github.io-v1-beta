/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { MessageService } from 'primeng/api';
import { map } from 'rxjs';

import { EntityOp } from '@ngrx/data';

import { isSampleActionType } from './is-sample-action-type';
import { SampleService } from './sample.service';

@Component({
  selector: 'ae-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, OnDestroy {
  sub = this.ss.entityActions$
    .pipe(
      map((action) => {
        if (isSampleActionType(action.type, EntityOp.SAVE_ADD_ONE_SUCCESS)) {
          this.ms.add({
            severity: 'success',
            detail: 'Created the item',
            icon: 'pi pi-check',
          });
        }

        if (isSampleActionType(action.type, EntityOp.SAVE_DELETE_ONE_SUCCESS)) {
          this.ms.add({
            severity: 'success',
            detail: 'Deleted the item',
            icon: 'pi pi-check',
          });

          this.router.navigate(['../../table-view'], {
            relativeTo: this.route,
          });
        }

        if (isSampleActionType(action.type, EntityOp.SAVE_ADD_ONE_ERROR)) {
          this.ms.add({
            severity: 'error',
            summary: 'Internal Server Error',
            detail: action.payload.data.error.message,
            icon: 'pi pi-times',
          });
        }
      })
    )
    .subscribe();

  constructor(
    private readonly ss: SampleService,
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
}
