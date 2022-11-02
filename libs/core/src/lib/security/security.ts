import { Request } from 'express';

import {
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const PUBLIC_META_KEY = 'Public';
export const PERMISSION_META_KEY = 'Permission';

export function Public() {
  return SetMetadata(PUBLIC_META_KEY, true);
}

enum Operations {
  READ = 'READ',
  WRITE = 'WRITE',
  MANAGE = 'MANAGE',
  ADMIN = 'ADMIN',
  RESOURCE_MANAGER = 'RESOURCE_MANAGER',
}

const PERMISSION_PAD = ':::';
const RESOUCE_OPERATION_DELIMETER = ':';
const PERMISSIONS_DELIMETER = '|';

export function isPublic(reflector: Reflector, context: ExecutionContext) {
  const isPublicResource = reflector.getAllAndOverride(PUBLIC_META_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);

  return !!isPublicResource;
}

function createPermission(permission: string) {
  return [PERMISSION_PAD, permission.trim().toUpperCase(), PERMISSION_PAD].join(
    ''
  );
}

export function canRead(resourceName: string) {
  return createPermission(
    [Operations.READ, resourceName].join(RESOUCE_OPERATION_DELIMETER)
  );
}

export function canWrite(resourceName: string) {
  return createPermission(
    [Operations.WRITE, resourceName].join(RESOUCE_OPERATION_DELIMETER)
  );
}

export function canManage(resourceName: string) {
  return createPermission(
    [Operations.MANAGE, resourceName].join(RESOUCE_OPERATION_DELIMETER)
  );
}

export function canAdministrate() {
  return createPermission(Operations.ADMIN);
}

function Permission(permission: string) {
  return SetMetadata(PERMISSION_META_KEY, createPermission(permission));
}

export function hasPermission(reflector: Reflector, context: ExecutionContext) {
  const user = context.switchToHttp().getRequest<Request>()['user'] as any;

  /**
   * Required Permission
   */
  const rp: string = reflector.getAllAndOverride(PERMISSION_META_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);

  if (rp) {
    console.log('Required permission : ', rp);
    console.log('User permission : ', user?.permission);

    /**
     * User permission
     */
    const up: string = user?.permission;

    /**
     * If user is admin,
     * Then return true;
     */
    if (up?.includes(canAdministrate())) {
      return true;
    }

    if (up.includes(rp)) {
      return true;
    }

    /**
     * When required permission is read permission,
     * Then if user has write or manage permission,
     * Then return true
     */
    if (rp.startsWith(':::READ:')) {
      if (up.includes(rp.replace('READ', 'WRITE'))) {
        return true;
      }

      if (up.includes(rp.replace('READ', 'MANAGE'))) {
        return true;
      }
    }

    if (rp.startsWith(':::WRITE:')) {
      if (up.includes(rp.replace('WRITE', 'MANAGE'))) {
        return true;
      }
    }

    return false;
  }
  return true;
}

export function ManagePermission(resourceName: string) {
  return Permission(canManage(resourceName));
}

export function ReadPermission(resourceName: string) {
  return Permission(canRead(resourceName));
}

export function WritePermission(resourceName: string) {
  return Permission(canWrite(resourceName));
}

export function AdminPermission() {
  return Permission(canAdministrate());
}
