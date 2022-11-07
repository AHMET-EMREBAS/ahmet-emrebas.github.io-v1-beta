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
        name: 'quantity',

        id: 'quantity-quantity-input',

        type: 'int',

        valueType: 'number',

        inputType: 'number-input',

        required: true,
      })

      .add({
        name: 'product',

        type: 'many-to-one',

        target: 'Product',

        valueType: 'string',

        inputType: 'select-input',

        required: true,

        optionLabel: 'name',

        optionValue: 'id',

        asyncOptions: this.orderService.productService?.entities$,
      })

      .add({
        name: 'pricelevel',

        type: 'many-to-one',

        target: 'Pricelevel',

        valueType: 'string',

        inputType: 'select-input',

        required: true,

        optionLabel: 'name',

        optionValue: 'id',

        asyncOptions: this.orderService.pricelevelService?.entities$,
      })

      .add({
        name: 'transaction',

        type: 'many-to-one',

        target: 'Transaction',

        valueType: 'string',

        inputType: 'select-input',

        required: true,

        optionLabel: 'id',

        optionValue: 'id',

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
