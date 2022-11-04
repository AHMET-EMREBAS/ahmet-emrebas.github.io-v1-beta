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

import { SampleService } from './sample.service';

@Component({
  selector: 'ae-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, OnDestroy {
  sub = this.sampleService.entityActions$
    .pipe(
      map((action) => {
        if (action.type === '[Sample] @ngrx/data/save/add-one/success') {
          this.messageService.add({
            severity: 'success',
            detail: 'Created the item',
            icon: 'pi pi-check',
          });

          this.router.navigate(['table-view'], { relativeTo: this.route });
        }

        if (action.type === '[Sample] @ngrx/data/save/add-one/error') {
          this.messageService.add({
            severity: 'error',
            summary: 'Internal Server Error',
            detail: action.payload.data.error.message,
            icon: 'pi pi-times',
          });
        }
        // this.router.navigate(['create'], { relativeTo: this.route });
      })
    )
    .subscribe();

  constructor(
    private readonly sampleService: SampleService,
    private readonly messageService: MessageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
