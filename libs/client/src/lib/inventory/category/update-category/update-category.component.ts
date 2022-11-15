import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory, IDepartment, ICategory } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { CategoryService } from '../category.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements AfterViewInit {
  title = 'Update Category';
  private itemToBeUpdated!: Partial<ICategory<ICategory, IDepartment>>;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(20),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',

      required: true,

      minLength: 0,

      maxLength: 20,
    },
  ];

  constructor(
    private readonly service: CategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
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
