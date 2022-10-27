import { ValidationPipe as VP } from '@nestjs/common';

export const ValidationPipe = new VP({
  transform: true,
});
