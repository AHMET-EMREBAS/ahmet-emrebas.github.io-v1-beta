import { IReadPermission } from 'common/inventory/interfaces/permission';
import { IReadUser } from 'common/inventory/interfaces/user';
import { startCase } from 'lodash';

import { SetMetadata } from '@nestjs/common';

export enum OperationNames {
  WRITE = 'WRITE',
  READ = 'READ',
  WRITE_OWN = 'WRITE:OWN',
  READ_OWN = 'READ:OWN',
  MANAGE = 'MANAGE',
  MANAGE_OWN = 'MANAGE:OWN',
}

export const RESOURCE_PERMISSION_KEY = 'RESOURCE_PERMISSION_KEY';

/**
 *
 * @param r Resource name
 * @param o Opeation name
 * @returns permittion string
 */
export function createPermission(
  r: string,
  o: OperationNames
): IReadPermission {
  const permissionString = [o, r.toUpperCase()].join(':');
  return {
    name: permissionString,
    description: startCase(permissionString.split(':').join(' ')),
  };
}

export function Permission(resourceName: string, operation: OperationNames) {
  return SetMetadata(
    RESOURCE_PERMISSION_KEY,
    createPermission(resourceName, operation).name
  );
}

export function CanRead(r: string) {
  return Permission(r, OperationNames.READ);
}

export function CanWrite(r: string) {
  return Permission(r, OperationNames.WRITE);
}

export function CanManage(r: string) {
  return Permission(r, OperationNames.MANAGE);
}

export function CanReadOwn(r: string) {
  return Permission(r, OperationNames.READ_OWN);
}
export function CanWriteOwn(r: string) {
  return Permission(r, OperationNames.WRITE_OWN);
}

export function CanManageOwn(r: string) {
  return Permission(r, OperationNames.MANAGE_OWN);
}

export function hasPermission(
  user: IReadUser,
  requiredPermission: string
): boolean {
  return user.permission.map((e) => e.name).includes(requiredPermission);
}
