export type $InputType =
  | 'firstName'
  | 'lastName'
  | 'middleName'
  | 'dateOfBirth'
  | 'text'
  | 'textarea'
  | 'number'
  | 'select'
  | 'editor'
  | 'date'
  | 'password'
  | 'email'
  | 'username'
  | 'color'
  | 'phone'
  | 'city'
  | 'state'
  | 'zip'
  | 'street'
  | 'url'
  | 'barcode';

export interface $CommonInputOptions<InputType extends $InputType> {
  inputType: InputType;

  label: string;

  required: false;

  unique: true;

  hint: string;
  /**
   * Include in the update-form?
   */
  update: false;

  /**
   * Include in the create-form?
   */
  create: false;
}
export interface $TextInputOptions extends $CommonInputOptions<'text'> {
  minLength: number;
  maxLength: number;

  patterns: string[];
}

export interface $NumberInputOptions extends $CommonInputOptions<'number'> {
  min: number;
  max: number;
}

export interface $SelectInputOptions<EnumType = string>
  extends $CommonInputOptions<'select'> {
  multiple: boolean;

  /**
   * Property of the object to use as value
   */
  propertyKey: string;

  /**
   * Property of the object to use as label
   */
  labelKey: string;

  /**
   * If enum type is defined, propertyKey and labelKey will be ignored. And, the enum value is used as both label and value
   */
  enum: EnumType;

  /**
   * Where to get the select options?
   */
  resourcePath: string;
}

export interface $EditorInputOptions extends $CommonInputOptions<'editor'> {
  minLength: number;
  maxLength: number;
}
export interface $TextareaInputOptions extends $CommonInputOptions<'textarea'> {
  minLength: number;
  maxLength: number;
}

export interface $DateInputOptions extends $CommonInputOptions<'date'> {
  before: Date;
  after: Date;
}

export type $InputOptions<InputType, EnumType> = InputType extends 'number'
  ? $NumberInputOptions
  : InputType extends 'text'
  ? $TextInputOptions
  : InputType extends 'textarea'
  ? $TextareaInputOptions
  : InputType extends 'editor'
  ? $EditorInputOptions
  : InputType extends 'date'
  ? $DateInputOptions
  : InputType extends 'select'
  ? $SelectInputOptions<EnumType>
  : InputType extends 'password'
  ? $CommonInputOptions<'password'>
  : InputType extends 'email'
  ? $CommonInputOptions<'email'>
  : InputType extends 'phone'
  ? $CommonInputOptions<'phone'>
  : InputType extends 'city'
  ? $CommonInputOptions<'city'>
  : InputType extends 'state'
  ? $CommonInputOptions<'state'>
  : InputType extends 'zip'
  ? $CommonInputOptions<'zip'>
  : InputType extends 'color'
  ? $CommonInputOptions<'color'>
  : InputType extends 'username'
  ? $CommonInputOptions<'username'>
  : InputType extends 'firstName'
  ? $CommonInputOptions<'firstName'>
  : InputType extends 'lastName'
  ? $CommonInputOptions<'lastName'>
  : InputType extends 'middleName'
  ? $CommonInputOptions<'middleName'>
  : InputType extends 'url'
  ? $CommonInputOptions<'url'>
  : InputType extends 'url'
  ? $CommonInputOptions<'barcode'>
  : any;

export type InputOptions<
  InputType extends $InputType = any,
  EnumType = null
> = $InputOptions<InputType, EnumType>;
