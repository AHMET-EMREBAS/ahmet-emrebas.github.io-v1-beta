import { Request } from 'express';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { JWT_SECRET } from './jwt-options.const';

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
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([fromCookie]),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { ...payload };
  }
}
