import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { firstValueFrom } from 'rxjs';
import {
  debounceTime,
  map,
} from 'rxjs/operators';

import { NgrxResourceService } from '../ngrx-resource';

const passwordValidator: ValidatorFn = (c: AbstractControl) => {
  const passrex = [
    {
      r: /[A-Z]{1,}/,
      message: 'Must contain an uppercase letter!',
    },

    {
      r: /[a-z]{1,}/,
      message: 'Must contain a lowercase letter!',
    },

    {
      r: /[0-9]{1,}/,
      message: 'Must contain a number!',
    },

    {
      r: /[!@#$%^&*()_+`[]{};':",.<>]{1,}/,
      message: 'Must contain a special character,',
    },
  ];
  for (const p of passrex) {
    if (!p.r.test(c.value)) {
      return { password: p.message };
    }
  }
  return null;
};

const uniqueValidator: (
  service: NgrxResourceService<any>,
  property: string
) => AsyncValidatorFn = (
  service: NgrxResourceService<any>,
  property: string
) => {
  return (control: AbstractControl) => {
    return firstValueFrom(
      service.entities$.pipe(
        debounceTime(400),
        map((data) => {
          const v = control.value.toLowerCase().trim();
          const found = data.find((e) => {
            const f = e[property].toLowerCase().trim();
            return v === f;
          });
          console.table({
            property,
            controlValue: control.value,
            found,
          });

          if (found) {
            return { unique: 'Must be unique!' };
          }
          return null;
        })
      )
    );
  };
};

export class InputControl extends FormControl {
  public readonly validators: ValidatorFn[] = [];
  public readonly asyncValidators: AsyncValidatorFn[] = [];

  public readonly name!: string;
  public readonly default!: any;
  public readonly minLength!: number;
  public readonly maxLength!: number;
  public readonly min!: number;
  public readonly max!: number;
  public readonly password!: boolean;
  public readonly email!: boolean;
  public readonly required!: boolean;
  public readonly control!: FormControl;

  public readonly placeholder!: string;
  public readonly label!: string;
  public readonly inputType!: string;

  public readonly unique!: boolean;

  constructor(
    options: Partial<InputControl>,
    public ds: NgrxResourceService<any>
  ) {
    super(options.default || '', [], []);
    Object.assign(this, options);

    options.required &&
      this.validators.push((c: AbstractControl) =>
        Validators.required(c) ? { required: 'Field is required!' } : null
      );

    options.minLength &&
      this.validators.push(Validators.minLength(options.minLength));

    options.maxLength &&
      this.validators.push(Validators.maxLength(options.maxLength));

    options.min && this.validators.push(Validators.min(options.min));

    options.max && this.validators.push(Validators.max(options.max));

    options.email && this.validators.push(Validators.email);

    if (options.password) {
      this.validators.push(Validators.minLength(6));
      this.validators.push(passwordValidator);
    }

    this.addValidators(this.validators);

    if (options.unique === true)
      this.asyncValidators.push(uniqueValidator(ds, options.name as string));
    this.addAsyncValidators(this.asyncValidators);
  }

  error() {
    return;
  }
}

export function getErrorMessage(errors: Record<string, any>) {
  console.log(errors);
  if (errors['required']) return 'Field is required!';

  if (errors['minlength'])
    return `Field must be longer than ${errors['minlength'].requiredLength} but found ${errors['minlength'].actualLength}!`;

  if (errors['maxlength'])
    return `Field must be shorter than ${errors['maxlength'].requiredLength} but found ${errors['maxlength'].actualLength}!`;

  if (errors['email']) return `Should be a valid email!`;

  if (errors['min'])
    return `Field must be greater than ${errors['min'].requiredLength} but found ${errors['min'].actualLength}!`;

  if (errors['max'])
    return `Field must be less than ${errors['max'].requiredLength} but found ${errors['max'].actualLength}!`;

  if (errors['password']) return errors['password'];

  if (errors['unique']) return errors['unique'];
  return;
}
