import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { ProductFormService } from '../product-form.service';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'ae-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  @Input() submitLabel = 'Save Product';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Product, InputAttributes>>;

  constructor(
    private readonly productService: ProductService,
    private readonly productFormService: ProductFormService
  ) {}

  formBuilder!: FormManager<Product>;

  ngOnInit(): void {
    this.formGroup = this.productFormService.createForm();
    this.formFields = this.productFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Product) {
    this.productService.add({ ...formValue });
  }

  field(name: keyof Product) {
    return this.formFields[name];
  }
}
