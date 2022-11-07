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
    this.formManager
      .add({
        name: 'name',
        id: 'category-name-input',
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 10,
        hint: '3-10 character long name.',
      })
      .add({
        name: 'cities',
        id: 'category-city-input',
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
        id: 'category-price',
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
