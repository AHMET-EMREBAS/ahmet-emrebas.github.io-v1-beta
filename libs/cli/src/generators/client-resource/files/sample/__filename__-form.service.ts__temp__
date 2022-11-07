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
    this.formManager
      .add({
        name: 'name',
        id: 'sample-name-input',
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 10,
        hint: '3-10 character long name.',
      })
      .add({
        name: 'cities',
        id: 'sample-city-input',
        inputType: 'select',
        required: true,
        asyncOptions: of([
          { id: 1, label: 'Yozgat' },
          { id: 2, label: 'Angara' },
          { id: 3, label: 'Suvas' },
          { id: 4, label: 'Girik Gale' },
        ]),
        optionValue: 'id',
        optionLabel: 'label',
      })
      .add({
        name: 'price',
        id: 'sample-price',
        label: 'Set price',
        required: true,
        currency: 'USD',
        min: 50,
        max: 9000000,
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
