import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadDepartment } from 'common/inventory/interfaces';
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
  private itemToBeUpdated!: Partial<IReadDepartment>;

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
      placeholder: 'name',

      required: true,

      minLength: 3,

      maxLength: 20,
    },
  ];

  constructor(
    private readonly departmentService: DepartmentService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.departmentService.getAll();
  }

  ngAfterViewInit(): void {
    const item = this.departmentService.getItemToBeUpdated();
    if (item) {
      this.itemToBeUpdated = item;
      setFormGroupValue(this.formGroup, item);
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.departmentService.update({
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
