import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Quantity } from './quantity.interface';
import { QuantityService } from './quantity.service';

@Injectable()
export class QuantityFormService {
  private readonly formManager!: FormManager<Quantity>;

  constructor(private readonly quantityService: QuantityService) {
    this.formManager = new FormManager(quantityService);
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

        asyncOptions: this.quantityService.productService?.entities$,
      })

      .add({
        name: 'store',

        type: 'many-to-one',

        target: 'Store',

        valueType: 'string',

        inputType: 'select-input',

        required: true,

        optionLabel: 'name',

        optionValue: 'id',

        asyncOptions: this.quantityService.storeService?.entities$,
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
