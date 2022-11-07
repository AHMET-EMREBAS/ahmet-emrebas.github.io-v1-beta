import {
  ValidateAndTransformBy,
  ValidateAndTransformPipe,
} from 'validations';

import {
  Body,
  createParamDecorator,
  ExecutionContext,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { ClassConstructor } from '../entity';

export function ReqQuery() {
  return Query(ValidateAndTransformPipe);
}

export function ReqBody(type?: ClassConstructor<any>) {
  if (type) {
    return Body(ValidateAndTransformBy(type));
  }
  return Body(ValidateAndTransformPipe);
}

export function IdParam() {
  return Param('id', ParseIntPipe);
}

export function RelationIdParam() {
  return Param('relationId', ParseIntPipe);
}

export function RelationNameParam() {
  return Param('relationName');
}

export const GetUser = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
  }
);
