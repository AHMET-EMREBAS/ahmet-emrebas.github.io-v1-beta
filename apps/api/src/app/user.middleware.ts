import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    req.user = {
      id: 100,
    };
    return next();
  }
}
