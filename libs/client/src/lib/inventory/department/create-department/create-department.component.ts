import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InputOptions } from 'material/form';

import { DepartmentService } from '../department.service';

@Component({
  selector: 'ae-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss'],
})
export class CreateDepartmentComponent {
  submitted = false;
  title = 'Create Department';
  formGroup = new FormGroup({});
  fields: InputOptions[] = [];
  constructor(
    private readonly departmentService: DepartmentService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {}

  submit() {
    if (this.submitted === false)
      if (this.formGroup.valid) {
        this.submitted = true;
        this.departmentService.add(this.formGroup.value);
      }
  }
}
