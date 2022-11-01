import { Request } from 'express';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';

import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtModuleOptions } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';

function fromCookie(req: Request) {
  return req.cookies.auth;
}

function fromQuery(req: Request) {
  return req.query.auth;
}

function fromHeader(req: Request) {
  return req.headers.authorization;
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('JWT_OPTIONS') options: JwtModuleOptions) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([fromCookie]),
      ignoreExpiration: false,
      secretOrKey: options.secret,
    });
  }

  async validate(payload: any) {
    return { ...payload };
  }
}
