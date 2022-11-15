import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputOptions } from 'material/form';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ae-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  submitted = false;
  title = 'Create Category';
  formGroup = new FormGroup({});
  fields: InputOptions[] = [];
  constructor(
    private readonly categoryService: CategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {}

  submit() {
    if (this.submitted === false)
      if (this.formGroup.valid) {
        this.submitted = true;
        this.categoryService.add(this.formGroup.value);
      }
  }
}
