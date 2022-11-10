import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Feature } from './feature.interface';
import { FeatureService } from './feature.service';

@Injectable()
export class FeatureFormService {
  private readonly formManager!: FormManager<Feature>;

  constructor(private readonly featureService: FeatureService) {
    this.formManager = new FormManager(featureService);
    this.init();
  }

  private init() {
    this.formManager.add({
      id: 'feature-feature-input',
      name: 'feature',
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
