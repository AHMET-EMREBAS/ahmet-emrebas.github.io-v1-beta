import { Request } from 'express';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { JWT_SECRET } from './jwt-options.const';

function fromCookie(req: Request) {
  const authtoken = req.cookies.authorization;
  return authtoken;
}

function fromQuery(req: Request) {
  const authtoken = req.query.authorization;
  return authtoken;
}

function fromHeader(req: Request) {
  const authtoken = req.headers.authorization;
  return authtoken;
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        fromCookie,
        fromHeader,
        fromQuery,
      ]),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { ...payload };
  }
}
