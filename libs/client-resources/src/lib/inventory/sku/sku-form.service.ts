import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Sku } from './sku.interface';
import { SkuService } from './sku.service';

@Injectable()
export class SkuFormService {
  private readonly formManager!: FormManager<Sku>;

  constructor(private readonly skuService: SkuService) {
    this.formManager = new FormManager(skuService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        id: 'sku-sku-input',
        name: 'sku',
        inputType: 'text',

        minLength: 3,
        maxLength: 50,
      })

      .add({
        id: 'sku-barcode-input',
        name: 'barcode',
        inputType: 'text',

        minLength: 10,
        maxLength: 13,
      })

      .add({
        id: 'sku-description-input',
        name: 'description',
        inputType: 'textarea',

        minLength: 3,
        maxLength: 50,
      })

      .add({
        id: 'sku-variants-input',
        name: 'variants',
        inputType: 'search-many',
        isNumberArray: true,
        asyncOptions: this.skuService.variantsService?.entities$,
      })

      .add({
        id: 'sku-product-input',
        name: 'product',
        inputType: 'search-many',
        isNumber: true,
        asyncOptions: this.skuService.productService?.entities$,
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
