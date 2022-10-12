import {
  Param,
  ParseIntPipe,
} from '@nestjs/common';

export function ID() {
  return Param('id', ParseIntPipe);
}

export function RelationId() {
  return Param('relationId', ParseIntPipe);
}

export function RelationName() {
  return Param('relationName');
}
