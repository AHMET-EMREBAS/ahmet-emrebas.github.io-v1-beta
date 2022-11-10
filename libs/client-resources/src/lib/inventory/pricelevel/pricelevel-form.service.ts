import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Pricelevel } from './pricelevel.interface';
import { PricelevelService } from './pricelevel.service';

@Injectable()
export class PricelevelFormService {
  private readonly formManager!: FormManager<Pricelevel>;

  constructor(private readonly pricelevelService: PricelevelService) {
    this.formManager = new FormManager(pricelevelService);
    this.init();
  }

  private init() {
    this.formManager.add({
      id: 'pricelevel-pricelevel-input',
      name: 'pricelevel',
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
