import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { fadeInOnEnterAnimation } from 'angular-animations';
import { ConfirmationService } from 'primeng/api';
import { switchMap } from 'rxjs';

import { QuantityService } from '../quantity.service';

@Component({
  selector: 'ae-delete-quantity',
  templateUrl: './delete-quantity.component.html',
  styleUrls: ['./delete-quantity.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class DeleteQuantityComponent {
  item$ = this.route.paramMap.pipe(
    switchMap((param) => {
      return this.ds.getByKey(param.get('id'));
    })
  );

  constructor(
    public readonly ds: QuantityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly confirmService: ConfirmationService
  ) {}

  deleteItem(id: number) {
    this.confirmService.confirm({
      accept: () => {
        this.ds.delete(id);
      },
      reject: () => this.back(),
    });
  }

  back() {
    this.router.navigate(['../../table-view'], { relativeTo: this.route });
  }
}
