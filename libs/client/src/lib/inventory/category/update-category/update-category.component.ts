import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadCategory } from 'common/inventory/interfaces';
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
  private itemToBeUpdated!: Partial<IReadCategory>;

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
      placeholder: 'name',

      required: true,

      minLength: 0,

      maxLength: 20,
    },
  ];

  constructor(
    private readonly categoryService: CategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.categoryService.getAll();
  }

  ngAfterViewInit(): void {
    const item = this.categoryService.getItemToBeUpdated();
    if (item) {
      this.itemToBeUpdated = item;
      setFormGroupValue(this.formGroup, item);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.categoryService.update({
        id: this.itemToBeUpdated.id,

        name: this.value('name'),
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
