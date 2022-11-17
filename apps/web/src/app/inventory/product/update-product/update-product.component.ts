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

import { IReadProduct } from 'common/inventory/interfaces';
import {
  InputOptions,
  setFormGroupValue,
} from 'material/form';
import { firstValueFrom } from 'rxjs';

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
    this.categoryService.getAll();
    this.departmentService.getAll();
  }

  async ngAfterViewInit() {
    const __item = this.productService.getItemToBeUpdated();
    this.formGroup.markAsDirty();
    this.formGroup.markAllAsTouched();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.productService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
    }
  }

  async submit() {
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
