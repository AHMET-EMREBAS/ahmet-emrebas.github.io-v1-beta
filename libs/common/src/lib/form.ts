export type InputComponent = string;

export type ValueType = string;

export interface FormField {
  name: string;
  type: ValueType;
  multiple?: boolean;
  nullable?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  inputComponent?: InputComponent;
}

export interface FormOptions {
  title?: string;
  description?: string;
  fields: FormField[];
}
