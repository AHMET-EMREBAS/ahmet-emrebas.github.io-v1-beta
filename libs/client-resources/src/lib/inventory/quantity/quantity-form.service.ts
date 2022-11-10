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
        id: 'quantity-quantity-input',
        name: 'quantity',
        inputType: 'number',

        min: -200,
        max: 999999999999,
      })

      .add({
        id: 'quantity-sku-input',
        name: 'sku',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.quantityService.skuService?.entities$,
      })

      .add({
        id: 'quantity-store-input',
        name: 'store',
        inputType: 'search-one',
        isNumber: true,
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
