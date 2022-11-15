import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  ICategory,
  IDepartment,
  IDepartment,
} from 'common/inventory/interfaces';
import { InputOptions, setFormGroupValue } from 'material/form';

import { DepartmentService } from '../department.service';

@Component({
  selector: 'ae-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss'],
})
export class UpdateDepartmentComponent implements AfterViewInit {
  title = 'Update Department';
  private itemToBeUpdated!: Partial<IDepartment<ICategory, IDepartment>>;

  formGroup = new FormGroup({});

  fields: InputOptions[] = [];

  constructor(
    private readonly service: DepartmentService,
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
