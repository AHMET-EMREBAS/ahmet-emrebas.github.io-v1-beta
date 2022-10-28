import {
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const SECURED_METAKEY = 'IS_SECURED';

export function Secured() {
  return SetMetadata(SECURED_METAKEY, true);
}

export function isSecuredResource(
  reflector: Reflector,
  context: ExecutionContext
): boolean {
  return reflector.getAllAndOverride(SECURED_METAKEY, [
    context.getClass(),
    context.getHandler(),
  ]);
}
