import { upperFirst } from 'lodash';

import {
  applyDecorators,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Permission,
  Public,
  Secured,
} from '../meta';

export interface RestControllerOptions {
  resource: string;
  secure?: boolean;
  public?: boolean;
  permission?: number;
}

export function RestController(options: RestControllerOptions) {
  const others = [];

  if (options.secure) {
    others.push(Secured());
  }
  if (options.public) {
    others.push(Public());
  }

  if (options.permission) {
    others.push(Permission(options.permission));
  }

  return applyDecorators(
    ApiTags(upperFirst(options.resource) + 'Controller'),
    Controller(options.resource),
    ...others
  );
}
