import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ICategory, IDepartment, IProduct } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';

import { ProductService } from '../product.service';

@Component({
  selector: 'ae-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements AfterViewInit {
  title = 'Update Product';
  private itemToBeUpdated!: Partial<IProduct<ICategory, IDepartment>>;

  formGroup = new FormGroup({});

  fields: InputOptions[] = [];

  constructor(
    private readonly service: ProductService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {}
  ngAfterViewInit(): void {
    const item = this.service.getItemToBeUpdated();
    if (item) setFormGroupValue(this.formGroup, item);
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
