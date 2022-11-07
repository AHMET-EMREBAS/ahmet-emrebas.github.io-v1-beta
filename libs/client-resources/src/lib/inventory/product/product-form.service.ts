import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Product } from './product.interface';
import { ProductService } from './product.service';

@Injectable()
export class ProductFormService {
  private readonly formManager!: FormManager<Product>;

  constructor(private readonly productService: ProductService) {
    this.formManager = new FormManager(productService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        name: 'name',

        id: 'product-name-input',

        type: 'string',

        valueType: 'string',

        inputType: 'text-input',

        minLength: 3,

        maxLength: 10,

        required: true,

        unique: true,
      })

      .add({
        name: 'description',

        id: 'product-description-input',

        type: 'string',

        valueType: 'string',

        inputType: 'text-input',

        minLength: 3,

        maxLength: 400,

        required: true,
      })

      .add({
        name: 'category',

        type: 'many-to-one',

        target: 'Category',

        valueType: 'string',

        inputType: 'select-input',

        required: true,

        optionLabel: 'name',

        optionValue: 'id',

        asyncOptions: this.productService.subService?.entities$,
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
