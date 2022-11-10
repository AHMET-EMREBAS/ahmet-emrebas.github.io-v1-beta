import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Resource } from './resource.interface';
import { ResourceService } from './resource.service';

@Injectable()
export class ResourceFormService {
  private readonly formManager!: FormManager<Resource>;

  constructor(private readonly resourceService: ResourceService) {
    this.formManager = new FormManager(resourceService);
    this.init();
  }

  private init() {
    this.formManager.add({
      id: 'resource-name-input',
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
