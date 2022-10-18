import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ahmet-emrebas-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  formGroup = new FormGroup({
    name: new FormControl('', []),
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
