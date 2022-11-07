import { Injectable } from '@angular/core';

import { FormManager } from 'material/form/form-builder';
import { of } from 'rxjs';

import { Category } from './category.interface';
import { CategoryService } from './category.service';

@Injectable()
export class CategoryFormService {
  private readonly formManager!: FormManager<Category>;

  constructor(private readonly categoryService: CategoryService) {
    this.formManager = new FormManager(categoryService);
    this.init();
  }

  private init() {
    this.formManager.add({
      name: 'name',

      id: 'category-name-input',

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
