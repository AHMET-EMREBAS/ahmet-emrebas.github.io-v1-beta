import { AuthUserService } from 'libs/auth/src/lib/auth-user.service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Sub } from './entity/sub.entity';

@Injectable()
export class SubAuthService implements AuthUserService<Sub> {
  constructor(
    @InjectRepository(Sub) private readonly subRepo: Repository<Sub>
  ) {}
  findByUsername(username: string): Promise<Sub> {
    return this.subRepo.findOne({ where: { username } });
  }
}
