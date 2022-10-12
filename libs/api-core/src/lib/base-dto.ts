export class BaseDTO<T = Record<string, any>> {
  constructor(value: T) {
    if (value) {
      Object.assign(this, value);
    }
  }
}
