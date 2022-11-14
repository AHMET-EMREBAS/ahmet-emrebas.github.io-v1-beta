import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { InputOptions } from 'material/form';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
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
      options: [
        { id: 1, label: ' Option 1' },
        { id: 2, label: ' Option 2' },
        { id: 3, label: ' Option 3' },
        { id: 4, label: ' Option 4' },
        { id: 5, label: ' Option 5' },
        { id: 6, label: ' Option 6' },
      ],
    },
    {
      name: 'department',
      placeholder: 'Select Department',
      type: 'select',
      required: true,
      options: [
        { id: 1, label: ' Option 1' },
        { id: 2, label: ' Option 2' },
        { id: 3, label: ' Option 3' },
        { id: 4, label: ' Option 4' },
        { id: 4, label: ' Option 4' },
        { id: 5, label: ' Option 5' },
        { id: 5, label: ' Option 5' },
        { id: 6, label: ' Option 6' },
      ],
    },
    {
      name: 'active',
      placeholder: 'Active',
      type: 'checkbox',
    },
  ];

  constructor(private readonly productService: ProductService) {}

  submit() {
    console.log(this.formGroup.value);
    this.productService.addOneToCache({
      id: Math.floor(Math.random() * 900000) + 1,
      name: this.formGroup.value.name || '',
      description: this.formGroup.value.description || '',
    });
  }
}
