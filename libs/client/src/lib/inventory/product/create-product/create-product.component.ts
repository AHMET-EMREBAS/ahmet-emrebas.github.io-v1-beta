import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(50),
    ]),

    description: new FormControl('', [
      Validators.minLength(3),

      Validators.maxLength(500),
    ]),

    category: new FormControl('', [Validators.required]),

    department: new FormControl('', [Validators.required]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',

      required: true,

      minLength: 0,

      maxLength: 50,
    },

    {
      name: 'description',
      type: 'textarea',

      minLength: 3,

      maxLength: 500,
    },

    {
      name: 'category',
      type: 'select',
      asyncOptions: this.categoryService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },

    {
      name: 'department',
      type: 'select',
      asyncOptions: this.departmentService.entities$,
      optionValue: 'id',
      optionLabel: 'name',

      required: true,
    },
  ];

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly categoryService: CategoryService,
    private readonly departmentService: DepartmentService
  ) {
    this.productService.getAll();
    this.categoryService.getAll();
    this.departmentService.getAll();
  }

  submit() {
    if (this.submitted === false)
      if (this.formGroup.valid) {
        this.submitted = true;
        this.productService.add(this.formGroup.value as any);
      }
  }
}
