import {
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const PERMISSION_METAKEY = 'REQUIRED_PERMISSION';

export function Permission(permission: number) {
  return SetMetadata(PERMISSION_METAKEY, permission);
}

export function requiredPermissions(
  reflector: Reflector,
  context: ExecutionContext
): string {
  return reflector.getAllAndOverride(PERMISSION_METAKEY, [
    context.getClass(),
    context.getHandler(),
  ]);
}
