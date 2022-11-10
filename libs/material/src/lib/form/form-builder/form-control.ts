import {
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import {
  debounceTime,
  map,
} from 'rxjs';

import { NgrxDataService } from '../../data-services';
import { InputAttributes } from '../shared-input';

const ab = (control: any) =>
  Validators.pattern(/[a-b]{1,}/)(control)
    ? null
    : { password: 'Must contain at least a lowercase letter.' };

const AB = (control: any) =>
  Validators.pattern(/[A-B]{1,}/)(control)
    ? null
    : { password: 'Must contain at least a uppercase letter.' };

const anumber = (control: any) =>
  Validators.pattern(/[0-9]{1,}/)(control)
    ? null
    : { password: 'Must contain at least a number.' };

const specialCharacter = (control: any) =>
  Validators.pattern(/[!@#$%^&*()_+~`]{1,}/)(control)
    ? null
    : { password: 'Must contain at least a special character.' };

function uniqueValidator(
  key: string,
  dataService: NgrxDataService<any>
): ValidationErrors {
  return (control: FormControl) => {
    return dataService.isUniqueBy(key, control.value).pipe(
      debounceTime(3000),
      map((data) => {
        if (data) {
          return { unique: true };
        }
        return null;
      })
    );
  };
}

export function formControl(
  attr: InputAttributes,
  dataService?: NgrxDataService<any>
) {
  const vs = [];
  const asyncvs = [];

  if (attr.isEmail) vs.push(Validators.email);
  if (attr.required) vs.push(Validators.required);

  if (attr.isNumber) vs.push(Validators.pattern(/^[0-9]*$/));

  if (attr.isString) vs.push(Validators.pattern(/^[a-zA-Z]*$/));

  if (attr.minLength) vs.push(Validators.minLength(attr.minLength));

  if (attr.maxLength) vs.push(Validators.maxLength(attr.maxLength));

  if (attr.max) vs.push(Validators.max(attr.max));

  if (attr.min) vs.push(Validators.min(attr.min));

  if (attr.isPassword) vs.push(ab, AB, anumber, specialCharacter);

  if (attr.unique) {
    if (dataService) {
      if (attr.name) {
        asyncvs.push(uniqueValidator(attr.name.toString(), dataService) as any);
      } else {
        throw new Error('Name is required for async validator!');
      }
    } else {
      throw new Error('Unique validator requires the data service!');
    }
  }

  return new FormControl('', vs, asyncvs);
}
