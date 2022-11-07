import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { DepartmentFormService } from '../department-form.service';
import { Department } from '../department.interface';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'ae-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss'],
})
export class CreateDepartmentComponent implements OnInit {
  @Input() submitLabel = 'Save Department';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Department, InputAttributes>>;

  constructor(
    private readonly departmentService: DepartmentService,
    private readonly departmentFormService: DepartmentFormService
  ) {}

  formBuilder!: FormManager<Department>;

  ngOnInit(): void {
    this.formGroup = this.departmentFormService.createForm();
    this.formFields = this.departmentFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Department) {
    this.departmentService.add({ ...formValue });
  }

  field(name: keyof Department) {
    return this.formFields[name];
  }
}
