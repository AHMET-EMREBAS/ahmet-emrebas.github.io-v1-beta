import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrmConfirmationService } from 'material/resource';

import { PriceService } from '../price.service';

@Component({
  selector: 'ae-delete-price',
  templateUrl: './delete-price.component.html',
  styleUrls: ['./delete-price.component.scss'],
})
export class DeletePriceComponent implements OnInit {
  title = 'Delete Price';
  constructor(
    private readonly prmConfirmationService: PrmConfirmationService,
    private readonly priceService: PriceService,
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
        this.priceService.deleteItem();
      },
      reject: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
    });
  }
}
