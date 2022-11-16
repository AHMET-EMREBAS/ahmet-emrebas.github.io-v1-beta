import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { PriceService } from '../price.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ae-delete-price',
  templateUrl: './delete-price.component.html',
  styleUrls: ['./delete-price.component.scss'],
})
export class DeletePriceComponent implements OnInit {
  title = 'Delete Price';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly priceService: PriceService,
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
        this.priceService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
