import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrmConfirmationService } from 'material/resource';

import { QuantityService } from '../quantity.service';

@Component({
  selector: 'ae-delete-quantity',
  templateUrl: './delete-quantity.component.html',
  styleUrls: ['./delete-quantity.component.scss'],
})
export class DeleteQuantityComponent implements OnInit {
  title = 'Delete Quantity';
  constructor(
    private readonly prmConfirmationService: PrmConfirmationService,
    private readonly quantityService: QuantityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prmConfirmationService.confirm({
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
