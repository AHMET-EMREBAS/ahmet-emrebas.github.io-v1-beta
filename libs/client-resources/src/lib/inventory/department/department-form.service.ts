import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Department } from './department.interface';
import { DepartmentService } from './department.service';

@Injectable()
export class DepartmentFormService {
  private readonly formManager!: FormManager<Department>;

  constructor(private readonly departmentService: DepartmentService) {
    this.formManager = new FormManager(departmentService);
    this.init();
  }

  private init() {
    this.formManager.add({
      name: 'name',

      id: 'department-name-input',

      type: 'string',

      valueType: 'string',

      inputType: 'text-input',

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
