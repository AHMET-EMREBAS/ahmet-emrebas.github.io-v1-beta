import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ICategory,
  IDepartment,
  IDepartment,
} from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';
import { DepartmentService } from '../department.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ae-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss'],
})
export class UpdateDepartmentComponent implements AfterViewInit {
  title = 'Update Department';
  private itemToBeUpdated!: Partial<IDepartment<ICategory, IDepartment>>;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,

      Validators.minLength(3),

      Validators.maxLength(20),
    ]),
  });

  fields: InputOptions[] = [
    {
      name: 'name',
      type: 'text',

      required: true,

      minLength: 3,

      maxLength: 20,
    },
  ];

  constructor(
    private readonly service: DepartmentService,
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
