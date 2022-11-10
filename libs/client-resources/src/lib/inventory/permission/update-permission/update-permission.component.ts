import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { PermissionFormService } from '../permission-form.service';
import { Permission } from '../permission.interface';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'ae-update-permission',
  templateUrl: './update-permission.component.html',
  styleUrls: ['./update-permission.component.scss'],
})
export class UpdatePermissionComponent implements OnInit {
  item$!: Observable<Partial<Permission>>;

  submitLabel = 'Update Permission';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Permission, InputAttributes>>;

  constructor(
    private readonly permissionService: PermissionService,
    private readonly route: ActivatedRoute,
    private readonly permissionFormService: PermissionFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.permissionFormService.updateForm();
    this.formFields = this.permissionFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.permissionService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof Permission) {
    return this.formFields[name];
  }

  update(formValue: Partial<Permission>, id: number) {
    this.permissionService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
