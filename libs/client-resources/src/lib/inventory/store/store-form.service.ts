import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Store } from './store.interface';
import { StoreService } from './store.service';

@Injectable()
export class StoreFormService {
  private readonly formManager!: FormManager<Store>;

  constructor(private readonly storeService: StoreService) {
    this.formManager = new FormManager(storeService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        name: 'name',

        id: 'store-name-input',

        type: 'string',

        valueType: 'string',

        inputType: 'text-input',

        minLength: 3,

        maxLength: 10,

        required: true,

        unique: true,
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

        asyncOptions: this.storeService.pricelevelService?.entities$,
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
