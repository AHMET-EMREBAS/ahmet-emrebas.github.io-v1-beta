import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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
  submitted = false;
  title = 'Create Product';
  formGroup = new FormGroup({});
  fields: InputOptions[] = [];
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {}

  submit() {
    if (this.submitted === false)
      if (this.formGroup.valid) {
        this.submitted = true;
        this.productService.add(this.formGroup.value);
      }
  }
}
