import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { fadeInOnEnterAnimation } from 'angular-animations';
import { ConfirmationService } from 'primeng/api';
import { switchMap } from 'rxjs';

import { SkuService } from '../sku.service';

@Component({
  selector: 'ae-delete-sku',
  templateUrl: './delete-sku.component.html',
  styleUrls: ['./delete-sku.component.scss'],
  animations: [fadeInOnEnterAnimation({ anchor: 'enter' })],
})
export class DeleteSkuComponent {
  item$ = this.route.paramMap.pipe(
    switchMap((param) => {
      return this.ds.getByKey(param.get('id'));
    })
  );

  constructor(
    public readonly ds: SkuService,
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
