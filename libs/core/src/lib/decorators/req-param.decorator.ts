import {
  Body,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { ValidationPipe } from '../pipe';

export function ReqBody() {
  return Body(ValidationPipe);
}

export function IDParam() {
  return Param('id', ParseIntPipe);
}

export function ReqQuery() {
  return Query(ValidationPipe);
}
