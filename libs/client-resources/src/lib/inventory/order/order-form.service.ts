import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Order } from './order.interface';
import { OrderService } from './order.service';

@Injectable()
export class OrderFormService {
  private readonly formManager!: FormManager<Order>;

  constructor(private readonly orderService: OrderService) {
    this.formManager = new FormManager(orderService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        id: 'order-quantity-input',
        name: 'quantity',
        inputType: 'number',

        min: 0,
        max: 999999999999,
      })

      .add({
        id: 'order-unitprice-input',
        name: 'unitprice',
        inputType: 'currency',

        min: 0,
        max: 999999999999,
      })

      .add({
        id: 'order-discount-input',
        name: 'discount',
        inputType: 'number',

        min: 1,
        max: 100,
      })

      .add({
        id: 'order-taxExempt-input',
        name: 'taxExempt',
        inputType: 'checkbox',
      })

      .add({
        id: 'order-sku-input',
        name: 'sku',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.orderService.skuService?.entities$,
      })

      .add({
        id: 'order-store-input',
        name: 'store',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.orderService.storeService?.entities$,
      })

      .add({
        id: 'order-transaction-input',
        name: 'transaction',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.orderService.transactionService?.entities$,
      });
  }

  createForm() {
    return this.formManager.newCreateForm();
  }

  updateForm() {
    return this.formManager.newUpdateForm();
  }

  createFormFields() {
    return this.formManager.getFields();
  }
  updateFormFields() {
    return this.formManager.getUpdateFields();
  }
}
