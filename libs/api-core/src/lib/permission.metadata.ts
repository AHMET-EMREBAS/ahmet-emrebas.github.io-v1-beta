import { SetMetadata } from '@nestjs/common';

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
