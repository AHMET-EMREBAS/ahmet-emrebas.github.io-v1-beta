import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

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

export class InputControl extends FormControl {
  public readonly validators: ValidatorFn[] = [];
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

  constructor(options: Partial<InputControl>) {
    super(options.default);
    Object.assign(this, options);

    options.required && this.validators.push(Validators.required);
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

    this.control = new FormControl(options.default, this.validators);
    this.addValidators(this.validators);
  }
}
