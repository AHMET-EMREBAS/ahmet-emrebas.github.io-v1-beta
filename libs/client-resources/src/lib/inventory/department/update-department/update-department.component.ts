import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { DepartmentFormService } from '../department-form.service';
import { Department } from '../department.interface';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'ae-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss'],
})
export class UpdateDepartmentComponent implements OnInit {
  item$!: Observable<Partial<Department>>;

  submitLabel = 'Update Department';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Department, InputAttributes>>;

  constructor(
    private readonly departmentService: DepartmentService,
    private readonly route: ActivatedRoute,
    private readonly departmentFormService: DepartmentFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.departmentFormService.updateForm();
    this.formFields = this.departmentFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.departmentService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Department) {
    return this.formFields[name];
  }

  update(formValue: Partial<Department>, id: number) {
    this.departmentService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
