import { SetMetadata } from '@nestjs/common';

export const ROLE_TOKEN = 'ROLE_TOKEN';
export const Role = (role: string) => SetMetadata(ROLE_TOKEN, role);
