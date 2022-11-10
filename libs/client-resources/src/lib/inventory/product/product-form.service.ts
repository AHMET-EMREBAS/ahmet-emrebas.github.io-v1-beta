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
        id: 'product-name-input',
        name: 'name',
        inputType: 'text',

        minLength: 3,
        maxLength: 50,
      })

      .add({
        id: 'product-description-input',
        name: 'description',
        inputType: 'textarea',

        minLength: 3,
        maxLength: 50,
      })

      .add({
        id: 'product-code-input',
        name: 'code',
        inputType: 'text',

        minLength: 3,
        maxLength: 50,
      })

      .add({
        id: 'product-category-input',
        name: 'category',
        inputType: 'search-one',
        required: false,
        isNumber: true,
        asyncOptions: this.productService.categoryService?.entities$,
      })

      .add({
        id: 'product-department-input',
        name: 'department',
        inputType: 'search-one',
        required: false,
        isNumber: true,
        asyncOptions: this.productService.departmentService?.entities$,
      })

      .add({
        id: 'product-variants-input',
        name: 'variants',
        inputType: 'search-many',
        required: false,
        isNumberArray: true,
        asyncOptions: this.productService.variantService?.entities$,
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
