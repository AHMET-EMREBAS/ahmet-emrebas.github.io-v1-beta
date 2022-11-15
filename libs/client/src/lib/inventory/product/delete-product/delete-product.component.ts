import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  title = 'Delete Product';
  constructor(
    private readonly confirmService: ConfirmationService,
    private readonly service: ProductService
  ) {}

  ngOnInit(): void {
    this.confirmService.confirm({
      message: 'Are you sure to delete the item?',
      header: 'Delete',
      icon: 'pi pi-times',
      acceptButtonStyleClass: 'p-button-danger',
      acceptLabel: 'Yes, delete item.',
      accept: () => {
        this.service.deleteItem();
      },
    });
  }
}
