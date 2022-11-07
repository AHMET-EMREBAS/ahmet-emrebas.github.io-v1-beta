import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Sample } from './sample.interface';
import { SampleService } from './sample.service';

@Injectable()
export class SampleFormService {
  private readonly formManager!: FormManager<Sample>;

  constructor(private readonly sampleService: SampleService) {
    this.formManager = new FormManager(sampleService);
    this.init();
  }

  private init() {
    this.formManager.add({
      name: 'name',

      type: 'string',

      valueType: 'string',

      minLength: 3,

      maxLength: 10,

      required: true,

      unique: true,
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
