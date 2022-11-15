import {
  AfterViewInit,
  Component,
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

import {
  ICategory,
  IDepartment,
  IProduct,
} from 'common/inventory/interfaces';
import {
  InputOptions,
  setFormGroupValue,
} from 'material/form';

import { CategoryService } from '../../category';
import { DepartmentService } from '../../department';
import { ProductService } from '../product.service';

@Component({
  selector: 'ae-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements AfterViewInit {
  title = 'Update Product';
  private itemToBeUpdated!: Partial<IProduct<ICategory, IDepartment>>;

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
    private readonly service: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly categoryService: CategoryService,
    private readonly departmentService: DepartmentService
  ) {}

  ngAfterViewInit(): void {
    const item = this.service.getItemToBeUpdated();
    if (item) setFormGroupValue(this.formGroup, item);
  }

  submit() {
    this.service.update({
      id: this.itemToBeUpdated.id,
      ...this.formGroup.value,
    } as any);
  }

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }
}
