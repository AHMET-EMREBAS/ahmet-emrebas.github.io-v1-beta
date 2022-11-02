import { ValidationPipe } from '@nestjs/common';

export const ValidateAndTransformPipe = new ValidationPipe({
  transform: true,
  transformOptions: {
    excludeExtraneousValues: true,

    exposeUnsetFields: false,
  },
});
