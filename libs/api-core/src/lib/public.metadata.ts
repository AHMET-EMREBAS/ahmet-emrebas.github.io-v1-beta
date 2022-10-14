import {
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const PUBLIC_TOKEN = 'public_key';

export const Public = () => SetMetadata(PUBLIC_TOKEN, true);

export function isPublicRoute(reflector: Reflector, context: ExecutionContext) {
  const isPublic = reflector.getAllAndOverride(PUBLIC_TOKEN, [
    context.getClass(),
    context.getHandler(),
  ]);
  return !!isPublic;
}
