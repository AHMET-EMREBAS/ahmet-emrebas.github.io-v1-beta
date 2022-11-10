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
        id: 'price-price-input',
        name: 'price',
        inputType: 'currency',

        min: 1,
        max: 9999999999999,
      })

      .add({
        id: 'price-cost-input',
        name: 'cost',
        inputType: 'currency',

        min: 0,
        max: 99999999999999,
      })

      .add({
        id: 'price-sku-input',
        name: 'sku',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.priceService.skuService?.entities$,
      })

      .add({
        id: 'price-pricelevel-input',
        name: 'pricelevel',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.priceService.pricelevelService?.entities$,
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
