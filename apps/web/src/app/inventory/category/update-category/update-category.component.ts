import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadCategory } from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { CategoryService } from '../category.service';
import { firstValueFrom } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements AfterViewInit, OnInit {
  title = 'Update Category';
  private itemToBeUpdated!: Partial<IReadCategory>;

  formGroup = new FormGroup({
    name: new FormControl(undefined, [
      Validators.required,

      Validators.minLength(0),

      Validators.maxLength(20),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',
      group: 'Primary',
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
  ) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    const __item = this.categoryService.getItemToBeUpdated();
    if (__item) {
      this.itemToBeUpdated = await firstValueFrom(
        this.categoryService.getByKey(__item.id)
      );
      setFormGroupValue(this.formGroup, this.itemToBeUpdated);
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
