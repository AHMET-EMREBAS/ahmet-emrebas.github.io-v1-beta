import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ICategory, IDepartment, ICategory } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';

import { CategoryService } from '../category.service';

@Component({
  selector: 'ae-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements AfterViewInit {
  title = 'Update Category';
  private itemToBeUpdated!: Partial<ICategory<ICategory, IDepartment>>;

  formGroup = new FormGroup({});

  fields: InputOptions[] = [];

  constructor(
    private readonly service: CategoryService,
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
