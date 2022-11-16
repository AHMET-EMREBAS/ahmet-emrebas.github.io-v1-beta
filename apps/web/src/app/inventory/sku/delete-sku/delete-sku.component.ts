import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { SkuService } from '../sku.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ae-delete-sku',
  templateUrl: './delete-sku.component.html',
  styleUrls: ['./delete-sku.component.scss'],
})
export class DeleteSkuComponent implements OnInit {
  title = 'Delete Sku';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly skuService: SkuService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.confirmService.confirm({
      message: 'Are you sure to delete the item?',
      header: 'Delete',
      icon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Yes, delete item.',
      accept: () => {
        this.skuService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
