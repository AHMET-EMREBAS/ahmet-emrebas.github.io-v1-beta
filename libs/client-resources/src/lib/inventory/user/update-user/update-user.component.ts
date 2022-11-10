import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { InputAttributes } from 'material/form/shared-input';
import { map, Observable, switchMap } from 'rxjs';

import { UserFormService } from '../user-form.service';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'ae-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  item$!: Observable<Partial<User>>;

  submitLabel = 'Update User';
  formGroup!: FormGroup;
  formFields!: Partial<Record<keyof User, InputAttributes>>;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly userFormService: UserFormService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.userFormService.updateForm();
    this.formFields = this.userFormService.updateFormFields();

    this.item$ = this.route.paramMap.pipe(
      switchMap((param) => this.userService.getByKey(param.get('id'))),
      map((data) => data)
    );
  }

  control(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  field(name: keyof User) {
    return this.formFields[name];
  }

  update(formValue: Partial<User>, id: number) {
    this.userService.update({ id, ...formValue });
    this.formGroup.reset();
  }
}
