import {
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const RESOURCE_METAKEY = 'RESOURCE_NAME';

export function Resource(resourceName: string) {
  return SetMetadata(RESOURCE_METAKEY, resourceName);
}

export function getResourceName(
  reflector: Reflector,
  context: ExecutionContext
): string {
  return reflector.getAllAndOverride(RESOURCE_METAKEY, [
    context.getClass(),
    context.getHandler(),
  ]);
}
