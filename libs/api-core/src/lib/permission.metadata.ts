import {
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const PermissionToken = 'REQUIRED_PERMISSION';

/**
 * Set required permission for controller Or end point.
 *
 * @param permission
 * @returns
 */
export function Permission(permission: Record<string, string>) {
  return SetMetadata(PermissionToken, permission);
}

export function getRequiredPermission(
  reflector: Reflector,
  context: ExecutionContext
) {
  const requiredPermission = reflector.getAllAndOverride(PermissionToken, [
    context.getClass(),
    context.getHandler(),
  ]);

  return requiredPermission;
}
