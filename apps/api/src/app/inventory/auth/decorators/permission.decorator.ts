import { IReadPermission } from 'common/inventory/interfaces/permission';
import { IReadUser } from 'common/inventory/interfaces/user';
import {
  lowerCase,
  startCase,
} from 'lodash';

import { SetMetadata } from '@nestjs/common';

/**
 * Operation names
 */
export enum ONS {
  WRITE = 'WRITE',
  READ = 'READ',
  WRITE_OWN = 'WRITE:OWN',
  READ_OWN = 'READ:OWN',
  MANAGE = 'MANAGE',
  MANAGE_OWN = 'MANAGE:OWN',
}

export const RESOURCE_PERMISSION_KEY = 'RESOURCE_PERMISSION_KEY';

/**
 * Create permission
 * @param r Resource name
 * @param o Opeation name
 * @returns permittion string
 */
export function cp(r: string, o: ONS): IReadPermission {
  const permissionString = [o, r.toUpperCase()].join(':');
  return {
    name: permissionString,
    description: startCase(lowerCase(permissionString.split(':').join(' '))),
  };
}

/**
 * Required permission
 * @param resourceName
 * @param operation
 * @returns
 */
export function rp(resourceName: string, operation: ONS) {
  return SetMetadata(RESOURCE_PERMISSION_KEY, cp(resourceName, operation).name);
}

export function CanRead(r: string) {
  return rp(r, ONS.READ);
}

export function CanWrite(r: string) {
  return rp(r, ONS.WRITE);
}

export function CanManage(r: string) {
  return rp(r, ONS.MANAGE);
}

export function CanReadOwn(r: string) {
  return rp(r, ONS.READ_OWN);
}
export function CanWriteOwn(r: string) {
  return rp(r, ONS.WRITE_OWN);
}

export function CanManageOwn(r: string) {
  return rp(r, ONS.MANAGE_OWN);
}

export function hasPermission(
  user: IReadUser,
  requiredPermission: string
): boolean {
  return user.permission.map((e) => e.name).includes(requiredPermission);
}
