import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Permission } from './permission.interface';
import { PermissionService } from './permission.service';

@Injectable()
export class PermissionFormService {
  private readonly formManager!: FormManager<Permission>;

  constructor(private readonly permissionService: PermissionService) {
    this.formManager = new FormManager(permissionService);
    this.init();
  }

  private init() {
    this.formManager

      .add({
        id: 'permission-permission-input',
        name: 'permission',
        inputType: 'text',
      })

      .add({
        id: 'permission-operation-input',
        name: 'operation',
        inputType: 'radio',
      })

      .add({
        id: 'permission-resource-input',
        name: 'resource',
        inputType: 'search-one',
        isNumber: true,
        asyncOptions: this.permissionService.resourceService?.entities$,
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
