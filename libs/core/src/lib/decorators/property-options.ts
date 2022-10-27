export interface PropertyOptions {
  type?: string;
  inputType?: string;
  unique?: boolean;
  minLength?: number;
  maxLength?: number;

  [key: string]: any;
}
