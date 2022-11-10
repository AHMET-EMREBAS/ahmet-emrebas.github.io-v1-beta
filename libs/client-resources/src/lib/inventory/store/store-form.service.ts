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
    this.formManager.add({
      id: 'store-name-input',
      name: 'name',
      inputType: 'text',

      minLength: 3,
      maxLength: 50,
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
