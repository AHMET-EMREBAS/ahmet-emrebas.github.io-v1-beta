import { Observable } from 'rxjs';

export type InputType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'checkbox-group'
  | 'number'
  | 'date'
  | 'email'
  | 'number-range'
  | 'date-range'
  | 'password'
  | 'radio'
  | 'select'
  | 'select-many'
  | 'select-one'
  | 'search-one'
  | 'search-many'
  | 'switch'
  | 'currency';

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
  isNumber: boolean;
  isNumberArray: boolean;
  isString: boolean;
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
  nullable: boolean;
}>;
