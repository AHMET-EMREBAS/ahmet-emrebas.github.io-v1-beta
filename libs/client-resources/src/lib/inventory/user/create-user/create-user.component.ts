import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormManager } from 'material/form/form-builder';
import { InputAttributes } from 'material/form/shared-input';

import { UserFormService } from '../user-form.service';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'ae-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  @Input() submitLabel = 'Save User';
  @Input() defaultValue!: any;

  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof User, InputAttributes>>;

  constructor(
    private readonly userService: UserService,
    private readonly userFormService: UserFormService
  ) {}

  formBuilder!: FormManager<User>;

  ngOnInit(): void {
    this.formGroup = this.userFormService.createForm();
    this.formFields = this.userFormService.createFormFields();
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  onSubmit(formValue: User) {
    this.userService.add({ ...formValue });
  }

  field(name: keyof User) {
    return this.formFields[name];
  }
}
