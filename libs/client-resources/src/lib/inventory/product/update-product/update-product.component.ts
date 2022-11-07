import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { ProductFormService } from '../product-form.service';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'ae-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  item$!: Observable<Partial<Product>>;

  submitLabel = 'Update Product';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Product, InputAttributes>>;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly productFormService: ProductFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.productFormService.updateForm();
    this.formFields = this.productFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.productService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Product) {
    return this.formFields[name];
  }

  update(formValue: Partial<Product>, id: number) {
    this.productService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
