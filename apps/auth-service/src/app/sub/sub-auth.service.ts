import { AuthUserService } from 'libs/auth/src/lib/auth-user.service';
import { Repository } from 'typeorm';

import {
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Sub } from './entity/sub.entity';

@Injectable()
export class SubAuthService implements AuthUserService<Sub> {
  private readonly logger = new Logger(SubAuthService.name);
  constructor(
    @InjectRepository(Sub) private readonly subRepo: Repository<Sub>
  ) {}
  findByUUID(uuid: string): Promise<Sub> {
    try {
      return this.subRepo.findOneBy({ uuid });
    } catch (err) {
      this.logger.error('Something went wrong while getting the user by UUID');
      return null;
    }
  }

  findByUsername(username: string): Promise<Sub> {
    try {
      return this.subRepo.findOneBy({ username });
    } catch (err) {
      this.logger.error(
        'Something went wrong while getting the user by username'
      );
      return null;
    }
  }
}
