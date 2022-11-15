import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(20),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',

      required: true,

      minLength: 0,

      maxLength: 20,
    },
  ];

  constructor(
    private readonly categoryService: CategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.categoryService.getAll();
  }

  submit() {
    if (this.submitted === false)
      if (this.formGroup.valid) {
        this.submitted = true;
        this.categoryService.add(this.formGroup.value as any);
      }
  }
}
