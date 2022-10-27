import { ValidationPipe as VP } from '@nestjs/common';

export const ValidationPipe = new VP({
  transform: true,
  stopAtFirstError: true,
  validationError: {
    target: false,
    value: false,
  },
});
