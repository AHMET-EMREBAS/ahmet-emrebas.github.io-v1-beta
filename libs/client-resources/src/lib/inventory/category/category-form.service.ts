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
      id: 'category-category-input',
      name: 'category',
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
