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
import { InputOptions } from 'material/form';

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
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),

    description: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(400),
    ]),

    category: new FormControl('', []),
    department: new FormControl('', []),
    active: new FormControl(false, []),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      placeholder: 'Product Name',
      type: 'text',
      minLength: 3,
      maxLength: 30,
    },
    {
      name: 'description',
      placeholder: 'Product Description',
      type: 'textarea',
      minLength: 3,
      maxLength: 400,
    },
    {
      name: 'category',
      placeholder: 'Select Category',
      type: 'select',
      options: this.getOptions('category'),
      optionLabel: 'name',
      optionValue: 'id',
    },
    {
      name: 'department',
      placeholder: 'Select Department',
      type: 'select',
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
    private readonly service: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    localStorage.setItem(
      'category',
      JSON.stringify([
        { id: 1, label: 'Category 1' },
        { id: 2, label: 'Category 2' },
        { id: 3, label: 'Category 3' },
        { id: 4, label: 'Category 4' },
        { id: 5, label: 'Category 6' },
        { id: 6, label: 'Category 6' },
        { id: 7, label: 'Category 7' },
      ])
    );

    localStorage.setItem(
      'department',
      JSON.stringify([
        { id: 1, label: 'Department 1' },
        { id: 2, label: 'Department 2' },
        { id: 3, label: 'Department 3' },
        { id: 3, label: 'Department 3' },
        { id: 3, label: 'Department 3' },
        { id: 4, label: 'Department 4' },
        { id: 4, label: 'Department 4' },
        { id: 5, label: 'Department 5' },
        { id: 6, label: 'Department 6' },
        { id: 7, label: 'Department 7' },
      ])
    );
  }
  ngAfterViewInit(): void {
    const item = this.service.getItemToBeUpdated();

    console.log(item, ' T O be udpated');
    if (item) {
      this.itemToBeUpdated = item;
      this.formGroup.get('name')?.setValue(item.name || '');
      this.formGroup.get('description')?.setValue(item.description || '');
      this.formGroup.get('category')?.setValue(item.category?.id + '');
      this.formGroup.get('department')?.setValue(item.department?.id + '');
      this.formGroup.get('active')?.setValue(item.active === true);
    }
  }

  submit() {
    this.service.updateOneInCache({
      id: this.itemToBeUpdated.id,
      ...this.formGroup.value,
    } as any);
  }

  getOptions(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]');
  }
}
