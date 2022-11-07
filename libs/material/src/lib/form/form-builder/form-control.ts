import {
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { map } from 'rxjs';

import { NgrxDataService } from '../../data-services';
import { InputAttributes } from '../shared-input';

const ab = (control: any) =>
  Validators.pattern(/[a-b]{1,}/)
    ? null
    : { message: 'Must contain at least a lowercase letter.' };

const AB = (control: any) =>
  Validators.pattern(/[A-B]{1,}/)
    ? null
    : { message: 'Must contain at least a uppercase letter.' };

const anumber = (control: any) =>
  Validators.pattern(/[0-9]{1,}/)
    ? null
    : { message: 'Must contain at least a number.' };

const specialCharacter = (control: any) =>
  Validators.pattern(/[!@#$%^&*()_+~`]{1,}/)
    ? null
    : { message: 'Must contain at least a special character.' };

function uniqueValidator(dataService?: NgrxDataService<any>): ValidationErrors {
  console.error('Data service is not provided!!!');
  return (control: any) =>
    dataService?.isUniqueBy('name', control.value).pipe(
      map((data) => {
        console.log('Async validator... ', data);
        if (data) {
          return { unique: `Name must be unique` };
        }

        return null;
      })
    );
}

export function formControl(
  attr: InputAttributes,
  dataService?: NgrxDataService<any>
) {
  const vs = [];
  const asyncvs = [];

  if (attr.isEmail) vs.push(Validators.email);
  if (attr.required) vs.push(Validators.required);

  if (attr.minLength) vs.push(Validators.minLength(attr.minLength));

  if (attr.maxLength) vs.push(Validators.maxLength(attr.maxLength));

  if (attr.max) vs.push(Validators.max(attr.max));

  if (attr.min) vs.push(Validators.min(attr.min));

  if (attr.isPassword) vs.push(ab, AB, anumber, specialCharacter);

  if (attr.unique) asyncvs.push(uniqueValidator(dataService) as any);

  return new FormControl('', vs, asyncvs);
}
