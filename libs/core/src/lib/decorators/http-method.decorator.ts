import {
  applyDecorators,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { Permission } from '../meta';
import { Can } from '../meta/can-access.enum';

/**
 * For this request, user needs the Can.WRITE permission, which allows user to write/update/delete/read any data in the table.
 * @returns
 */
export function PostReq() {
  return applyDecorators(
    Permission(Can.WRITE),
    ApiOperation({ summary: 'Create entity' }),
    ApiCreatedResponse(),
    ApiBadRequestResponse(),
    Post()
  );
}

export function PostOwnReq() {
  return applyDecorators(
    Permission(Can.WRITE_OWN),
    ApiOperation({ summary: 'Create own entity' }),
    ApiCreatedResponse(),
    ApiBadRequestResponse(),
    Post()
  );
}

export function GetReq() {
  return applyDecorators(
    Permission(Can.READ),
    ApiOperation({ summary: 'View entities' }),
    ApiOkResponse(),
    ApiBadGatewayResponse(),
    Get()
  );
}

export function GetOwnReq() {
  return applyDecorators(
    Permission(Can.READ_OWN),
    ApiOperation({ summary: 'View own entities' }),
    ApiOkResponse(),
    ApiBadGatewayResponse(),
    Get()
  );
}

export function GetReqById() {
  return applyDecorators(
    Permission(Can.READ),
    ApiOperation({ summary: 'View entity by id' }),
    ApiOkResponse(),
    Get(':id')
  );
}
export function GetOwnReqById() {
  return applyDecorators(
    Permission(Can.READ_OWN),
    ApiOperation({ summary: 'View own entity by id' }),
    ApiOkResponse(),
    Get(':id')
  );
}

export function UpdateReq() {
  return applyDecorators(
    Permission(Can.WRITE),
    ApiOperation({ summary: 'Update entity by id' }),
    ApiBadRequestResponse(),
    ApiOkResponse(),
    Put(':id')
  );
}

export function UpdateOwnReq() {
  return applyDecorators(
    Permission(Can.WRITE_OWN),
    ApiOperation({ summary: 'Update own entity by id' }),
    ApiBadRequestResponse(),
    ApiOkResponse(),
    Put(':id')
  );
}

export function DeleteReq() {
  return applyDecorators(
    Permission(Can.MANAGE),
    ApiOperation({ summary: 'Delete entity' }),
    ApiOkResponse(),
    Delete(':id')
  );
}
export function DeleteOwnReq() {
  return applyDecorators(
    Permission(Can.MANAGE_OWN),
    ApiOperation({ summary: 'Delete own entity' }),
    ApiOkResponse(),
    Delete(':id')
  );
}
