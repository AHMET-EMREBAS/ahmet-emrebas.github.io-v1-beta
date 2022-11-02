import { ClassConstructor } from 'class-transformer';

import {
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';

const validationOptions: ValidationPipeOptions = {
  transform: true,
  transformOptions: {
    excludeExtraneousValues: true,

    exposeUnsetFields: false,
  },
};

export const ValidateAndTransformPipe = new ValidationPipe(validationOptions);

export function ValidateAndTransformBy(type: ClassConstructor<any>) {
  return new ValidationPipe({
    ...validationOptions,
    expectedType: type,
  });
}
