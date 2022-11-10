import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Location } from './location.interface';
import { LocationService } from './location.service';

@Injectable()
export class LocationFormService {
  private readonly formManager!: FormManager<Location>;

  constructor(private readonly locationService: LocationService) {
    this.formManager = new FormManager(locationService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        id: 'location-location-input',
        name: 'location',
        inputType: '',

        maxLength: 300,
      })

      .add({
        id: 'location-x-input',
        name: 'x',
        inputType: 'number',

        min: 1,
        max: 9999999999999,
      })

      .add({
        id: 'location-y-input',
        name: 'y',
        inputType: 'number',

        min: 1,
        max: 9999999999999,
      })

      .add({
        id: 'location-z-input',
        name: 'z',
        inputType: 'number',

        min: 1,
        max: 9999999999999,
        required: false,
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
