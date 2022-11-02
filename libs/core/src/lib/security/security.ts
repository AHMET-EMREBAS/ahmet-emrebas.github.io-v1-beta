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

export function isPublic(reflector: Reflector, context: ExecutionContext) {
  const isPublicResource = reflector.getAllAndOverride(PUBLIC_META_KEY, [
    context.getClass(),
    context.getHandler(),
  ]);

  return !!isPublicResource;
}

export function createPermission(permission: string) {
  return ':::' + permission.trim().toUpperCase() + ':::';
}

export function Permission(permission: string) {
  return SetMetadata(PERMISSION_META_KEY, createPermission(permission));
}

export function hasPermission(reflector: Reflector, context: ExecutionContext) {
  const user = context.switchToHttp().getRequest<Request>()['user'] as any;

  const requiredPermission = reflector.getAllAndOverride(PERMISSION_META_KEY, [
    context.getClass(),
    context.getHandler(),
  ]);

  if (requiredPermission) {
    if (user?.permission?.includes(requiredPermission)) {
      return true;
    }
    return false;
  }
  return true;
}

export function ManagePermission(resourceName: string) {
  return Permission(`MANAGE:${resourceName}`);
}

export function ReadPermission(resourceName: string) {
  return Permission(`READ:${resourceName}`);
}

export function WritePermission(resourceName: string) {
  return Permission(`WRITE:${resourceName}`);
}
