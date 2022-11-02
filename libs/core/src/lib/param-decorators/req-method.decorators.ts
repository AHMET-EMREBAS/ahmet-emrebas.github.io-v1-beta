import {
  applyDecorators,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function FindAll() {
  return applyDecorators(
    ApiOperation({
      summary: 'Find All',
    }),
    ApiOkResponse(),
    Get()
  );
}

export function FindOneById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Find one by id',
    }),
    ApiOkResponse(),
    Get(':id')
  );
}

export function SaveOne() {
  return applyDecorators(
    ApiOperation({
      summary: 'Save one',
    }),
    ApiCreatedResponse(),
    Post()
  );
}

export function UpdateOneById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Update one by id',
    }),
    ApiOkResponse(),
    Put(':id')
  );
}

export function DeleteById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete one by id',
    }),
    ApiOkResponse(),
    Delete(':id')
  );
}
