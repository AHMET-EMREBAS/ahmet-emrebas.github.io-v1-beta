import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadProduct } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { ProductService } from '../product.service';
import { firstValueFrom } from 'rxjs';

import { CategoryService } from '../../category';

import { DepartmentService } from '../../department';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements AfterViewInit, OnInit {
  title = 'Update Product';
  private itemToBeUpdated!: Partial<IReadProduct>;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(50),
    ]),

    price: new FormControl('', [
      Validators.min(0),

      Validators.max(99999999999999),
    ]),

    cost: new FormControl('', [
      Validators.min(0),

      Validators.max(99999999999999),
    ]),

    quantity: new FormControl('', [
      Validators.min(0),

      Validators.max(1000000000000000000),
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
      group: 'Primary',
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 50,
    },

    {
      name: 'price',
      type: 'currency',
      group: 'Price',
      placeholder: 'price',

      min: 0,

      max: 99999999999999,
    },

    {
      name: 'cost',
      type: 'currency',
      group: 'Price',
      placeholder: 'cost',

      min: 0,

      max: 99999999999999,
    },

    {
      name: 'quantity',
      type: 'number',
      group: 'Quantity',
      placeholder: 'quantity',

      min: 0,

      max: 1000000000000000000,
    },

    {
      name: 'description',
      type: 'textarea',
      group: 'Primary',
      placeholder: 'description',

      minLength: 0,

      maxLength: 500,
    },

    {
      name: 'category',
      type: 'select',
      group: 'Meta',
      placeholder: 'category',
      asyncOptions: this.categoryService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },

    {
      name: 'department',
      type: 'select',
      group: 'Meta',
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
  ) {}

  ngOnInit(): void {
    this.categoryService.getAsOptions(['id', 'name']);

    this.departmentService.getAsOptions(['id', 'name']);
  }

  async ngAfterViewInit() {
    const __item = this.productService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.productService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.productService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),

        price: this.value('price'),

        cost: this.value('cost'),

        quantity: this.value('quantity'),

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
