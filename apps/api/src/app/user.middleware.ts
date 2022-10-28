import { IUserEntity } from 'common';

import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

const ids = [1, 2, 3, 4, 1];
let last = 1;

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    const rnd = ~~(Math.random() * 4) + 1;
    last = ids[ids.indexOf(last) + 1];
    req.user = {
      id: last,
    } as IUserEntity;

    console.table({
      user: last,
    });
    return next();
  }
}
