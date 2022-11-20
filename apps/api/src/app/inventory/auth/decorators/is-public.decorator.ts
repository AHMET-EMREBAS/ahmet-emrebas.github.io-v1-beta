import { SetMetadata } from '@nestjs/common';

export const PUBLIC_RESOURCE_KEY = 'PUBLIC_RESOURCE_KEY';
export function PublicResource() {
  return SetMetadata(PUBLIC_RESOURCE_KEY, true);
}
