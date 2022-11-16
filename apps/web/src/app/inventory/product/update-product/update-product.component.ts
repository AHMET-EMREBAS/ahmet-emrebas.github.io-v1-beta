import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadProduct } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { ProductService } from '../product.service';

import { CategoryService } from '../../category';

import { DepartmentService } from '../../department';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements AfterViewInit {
  title = 'Update Product';
  private itemToBeUpdated!: Partial<IReadProduct>;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(50),
    ]),

    description: new FormControl('', [
      Validators.minLength(0),

      Validators.maxLength(500),
    ]),

    category: new FormControl('', []),

    department: new FormControl('', []),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 50,
    },

    {
      name: 'description',
      type: 'textarea',
      placeholder: 'description',

      minLength: 0,

      maxLength: 500,
    },

    {
      name: 'category',
      type: 'select',
      placeholder: 'category',
      asyncOptions: this.categoryService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },

    {
      name: 'department',
      type: 'select',
      placeholder: 'department',
      asyncOptions: this.departmentService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
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

  ngAfterViewInit(): void {
    const item = this.productService.getItemToBeUpdated();
    if (item) {
      this.itemToBeUpdated = item;
      setFormGroupValue(this.formGroup, item);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.productService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),

        description: this.value('description'),

        category: this.value('category')?.id,

        department: this.value('department')?.id,
      });
    }
  }

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}