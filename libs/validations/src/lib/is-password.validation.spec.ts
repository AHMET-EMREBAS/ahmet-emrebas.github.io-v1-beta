import { validateSync } from 'class-validator';

import { IsPassword } from './is-password.validation';

class PassClass {
  @IsPassword()
  passsword!: string;
  constructor(password: string) {
    this.passsword = password;
  }
}

describe('Is Password Validation', () => {
  it('should perform all expresstions', () => {
    const validate = (value: any) =>
      validateSync(value, {
        stopAtFirstError: true,
        validationError: { target: false, value: false },
      });

    for (const i of ['a', 'Abc', '!24415', 'aaaaaaaaa', 'AQEtwer123']) {
      const errors = validate(new PassClass(i));
      expect(errors.length > 0);
    }

    for (const i of [
      'aB1@#$aafaswe1!',
      'a(A1234152',
      'abcdeA12,.',
      'adsfA12[',
      'asdfA12{',
      'asdfA12:',
      'asdfA12"',
    ]) {
      const errors = validate(new PassClass(i));
      expect(errors.length).toBe(0);
    }
  });
});
