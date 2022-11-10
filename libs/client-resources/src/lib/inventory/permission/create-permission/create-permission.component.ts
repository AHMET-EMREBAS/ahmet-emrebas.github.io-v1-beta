import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { PermissionFormService } from '../permission-form.service';
import { Permission } from '../permission.interface';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'ae-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.scss'],
})
export class CreatePermissionComponent implements OnInit {
  @Input() submitLabel = 'Save Permission';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof Permission, InputAttributes>>;

  constructor(
    private readonly permissionService: PermissionService,
    private readonly permissionFormService: PermissionFormService
  ) {}

  formBuilder!: FormManager<Permission>;

  ngOnInit(): void {
    this.formGroup = this.permissionFormService.createForm();
    this.formFields = this.permissionFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: Permission) {
    this.permissionService.add({ ...formValue });
  }

  field(name: keyof Permission) {
    return this.formFields[name];
  }
}
