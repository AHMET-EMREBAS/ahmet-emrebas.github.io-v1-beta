import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Price } from './price.interface';
import { PriceService } from './price.service';

@Injectable()
export class PriceFormService {
  private readonly formManager!: FormManager<Price>;

  constructor(private readonly priceService: PriceService) {
    this.formManager = new FormManager(priceService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        name: 'price',

        id: 'price-price-input',

        type: 'decimal',

        valueType: 'number',

        inputType: 'currency-input',

        min: 0,

        required: true,
      })

      .add({
        name: 'cost',

        id: 'price-cost-input',

        type: 'decimal',

        valueType: 'number',

        inputType: 'currency-input',

        min: 0,

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

        asyncOptions: this.priceService.productService?.entities$,
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
