import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { InputOptions } from 'material/form';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  title = 'Create Product';

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),

    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(400),
    ]),

    category: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    active: new FormControl(false, [Validators.required]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      placeholder: 'Product Name',
      type: 'text',
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    {
      name: 'description',
      placeholder: 'Product Description',
      type: 'textarea',
      required: true,
      minLength: 3,
      maxLength: 400,
    },
    {
      name: 'category',
      placeholder: 'Select Category',
      type: 'select',
      required: true,
      options: this.getOptions('category'),
      optionLabel: 'name',
      optionValue: 'id',
    },
    {
      name: 'department',
      placeholder: 'Select Department',
      type: 'select',
      required: true,
      options: this.getOptions('department'),
      optionLabel: 'name',
      optionValue: 'id',
    },
    {
      name: 'active',
      placeholder: 'Active',
      type: 'checkbox',
    },
  ];

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    localStorage.setItem(
      'category',
      JSON.stringify([
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
        { id: 4, name: 'Category 4' },
        { id: 5, name: 'Category 6' },
        { id: 6, name: 'Category 6' },
        { id: 7, name: 'Category 7' },
      ])
    );

    localStorage.setItem(
      'department',
      JSON.stringify([
        { id: 1, name: 'Department 1' },
        { id: 2, name: 'Department 2' },
        { id: 3, name: 'Department 3' },
        { id: 3, name: 'Department 3' },
        { id: 3, name: 'Department 3' },
        { id: 4, name: 'Department 4' },
        { id: 4, name: 'Department 4' },
        { id: 5, name: 'Department 5' },
        { id: 6, name: 'Department 6' },
        { id: 7, name: 'Department 7' },
      ])
    );
  }

  submit() {
    console.log(this.formGroup.value);
    this.productService.addOneToCache({
      id: Math.floor(Math.random() * 900000) + 1,
      name: this.formGroup.value.name || '',
      description: this.formGroup.value.description || '',
    });
  }

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }
}
