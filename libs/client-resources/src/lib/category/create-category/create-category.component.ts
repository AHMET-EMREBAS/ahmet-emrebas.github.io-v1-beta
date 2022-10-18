import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputControl } from 'material';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  formGroup = new FormGroup({
    name: new InputControl(
      {
        name: 'name',
        minLength: 3,
        maxLength: 20,
        unique: true,
      },
      this.ds
    ),
  });

  constructor(public readonly ds: CategoryService) {}

  submit() {
    if (this.formGroup.valid) {
      this.ds.add(this.formGroup.value);
    }
  }

  reset() {
    this.formGroup.reset();
  }
}
