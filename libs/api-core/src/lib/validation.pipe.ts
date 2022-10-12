import { ValidationPipe } from '@nestjs/common';

export const CreateValidationPipe = new ValidationPipe({
  transform: true,
  transformOptions: { exposeUnsetFields: false },
  validationError: {
    target: false,
    value: false,
  },
});

export const UpdateValidationPipe = new ValidationPipe({
  transform: true,
  skipMissingProperties: true,
  skipNullProperties: true,
  skipUndefinedProperties: true,
  transformOptions: { exposeUnsetFields: false },
  validationError: {
    target: false,
    value: false,
  },
});
