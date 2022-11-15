import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { QuantityService } from '../quantity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ae-delete-quantity',
  templateUrl: './delete-quantity.component.html',
  styleUrls: ['./delete-quantity.component.scss'],
})
export class DeleteQuantityComponent implements OnInit {
  title = 'Delete Quantity';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly quantityService: QuantityService,
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
        this.quantityService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
