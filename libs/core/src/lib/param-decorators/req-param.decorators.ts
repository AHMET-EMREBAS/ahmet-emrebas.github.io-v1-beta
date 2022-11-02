import { ValidateAndTransformPipe } from 'validations';

import {
  Body,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

export function ReqQuery() {
  return Query(ValidateAndTransformPipe);
}

export function ReqBody() {
  return Body(ValidateAndTransformPipe);
}

export function IdParam() {
  return Param('id', ParseIntPipe);
}
