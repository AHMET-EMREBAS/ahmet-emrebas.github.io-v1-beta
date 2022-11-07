import { Observable } from 'rxjs';

export type InputType =
  | 'text-input'
  | 'textarea-input'
  | 'checkbox-input'
  | 'number-input'
  | 'date-input'
  | 'email-input'
  | 'number-range-input'
  | 'date-range-input'
  | 'password-input'
  | 'radio-input'
  | 'select-input'
  | 'select-many-input'
  | 'switch-input'
  | 'currency-input';

export type InputAttributes<T = any> = Partial<{
  id: string;
  target: string;
  name: keyof T;
  type: string;
  label: string;
  placeholder: string;
  autocomplete: string;
  inputType: InputType;
  required: boolean;
  minLength: number;
  maxLength: number;
  isEmail: boolean;
  isPassword: boolean;
  after: Date;
  before: Date;
  min: number;
  max: number;
  hint: string;
  options: Record<string, any>[];
  asyncOptions: Observable<Record<string, any>[]>;
  selectionLimit: number;
  optionLabel: string;
  optionValue: string;
  locale: string;
  currency: string;
  tabindex: number;
  unique: boolean;
  in: (string | number | boolean)[];
  forbidden: (string | number | boolean)[];
  update: boolean;
  valueType: string;
}>;
