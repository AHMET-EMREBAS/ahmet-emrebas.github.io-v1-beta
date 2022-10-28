import {
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const PUBLIC_METAKEY = 'IS_PUBLIC';

export function Public() {
  return SetMetadata(PUBLIC_METAKEY, true);
}

export function isPublicResource(
  reflector: Reflector,
  context: ExecutionContext
): boolean {
  return reflector.getAllAndOverride(PUBLIC_METAKEY, [
    context.getClass(),
    context.getHandler(),
  ]);
}
