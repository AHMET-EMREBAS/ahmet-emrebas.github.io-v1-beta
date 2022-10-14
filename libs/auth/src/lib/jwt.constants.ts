import { v4 } from 'uuid';

import { JwtModuleOptions } from '@nestjs/jwt';

export const AUTH_COOKIE_NAME = 'auth';
export const jtwOptions: JwtModuleOptions = {
  secret: process.env.APP_SECRET || v4(),
  signOptions: { expiresIn: '30d' },
  verifyOptions: {
    ignoreExpiration: false,
  },
};
