import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputOptions } from 'material/form';

import { ProductService } from '../product.service';

import { CategoryService } from '../../category';

import { DepartmentService } from '../../department';

@Component({
  selector: 'ae-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  submitted = false;
  title = 'Create Product';
  formGroup = new FormGroup({});
  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',

      minLength: 0,

      maxLength: 50,
    },

    {
      name: 'description',
      type: 'textarea',

      minLength: 3,

      maxLength: 500,
    },
  ];
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,

    private readonly categoryService: CategoryService,

    private readonly departmentService: DepartmentService
  ) {}

  submit() {
    if (this.submitted === false)
      if (this.formGroup.valid) {
        this.submitted = true;
        this.productService.add(this.formGroup.value);
      }
  }
}
