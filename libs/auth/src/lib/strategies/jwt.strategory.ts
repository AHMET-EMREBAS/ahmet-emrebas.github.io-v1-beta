import { Request } from 'express';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { jtwOptions } from '../jwt.constants';

function fromCookie(req: Request) {
  return req?.cookies && req.cookies['auth'];
}

function fromQuery(req: Request) {
  return req.query['auth'];
}

function fromHeader(req: Request) {
  return req.headers['authorization'];
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([fromCookie]),
      ignoreExpiration: false,
      secretOrKey: jtwOptions.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
