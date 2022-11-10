import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Variant } from './variant.interface';
import { VariantService } from './variant.service';

@Injectable()
export class VariantFormService {
  private readonly formManager!: FormManager<Variant>;

  constructor(private readonly variantService: VariantService) {
    this.formManager = new FormManager(variantService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        id: 'variant-value-input',
        name: 'value',
        inputType: 'text',

        minLength: 3,
        maxLength: 400,
      })

      .add({
        id: 'variant-code-input',
        name: 'code',
        inputType: 'text',

        maxLength: 4,
        minLength: 1,
      })

      .add({
        id: 'variant-feature-input',
        name: 'feature',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.variantService.featureService?.entities$,
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
