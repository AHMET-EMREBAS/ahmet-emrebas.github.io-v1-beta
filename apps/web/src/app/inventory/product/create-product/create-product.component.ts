import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { groupBy } from 'lodash';
import { InputOptions } from 'material/form';

import { CategoryService } from '../../category';
import { DepartmentService } from '../../department';
import { ProductService } from '../product.service';

@Component({
  selector: 'ae-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  submitted = false;
  title = 'Create Product';
  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(50),
    ]),

    price: new FormControl(undefined, [
      Validators.min(0),

      Validators.max(999999999999),
    ]),

    cost: new FormControl(undefined, [
      Validators.min(0),

      Validators.max(999999999999),
    ]),

    quantity: new FormControl(undefined, [
      Validators.min(0),

      Validators.max(999999999999),
    ]),

    description: new FormControl(undefined, [
      Validators.minLength(0),

      Validators.maxLength(500),
    ]),

    category: new FormControl(undefined, []),

    department: new FormControl(undefined, []),
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

      max: 999999999999,
    },

    {
      name: 'cost',
      type: 'currency',
      group: 'Price',
      placeholder: 'cost',

      min: 0,

      max: 999999999999,
    },

    {
      name: 'quantity',
      type: 'number',
      group: 'Quantity',
      placeholder: 'quantity',

      min: 0,

      max: 999999999999,
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
      placeholder: 'department',
      asyncOptions: this.departmentService.entities$,
      optionValue: 'id',
      optionLabel: 'name',
    },
  ];

  groups = Object.entries(groupBy(this.fields, 'group'));

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

  submit() {
    if (this.submitted === false) {
      if (this.formGroup.valid) {
        this.submitted = true;
        this.productService.add({
          name: this.value('name'),

          price: this.value('price'),

          cost: this.value('cost'),

          quantity: this.value('quantity'),

          description: this.value('description'),

          category: this.value('category'),

          department: this.value('department'),
        });
      }
    }
  }

  private value(key: string) {
    return this.formGroup.get(key)?.value;
  }
}
