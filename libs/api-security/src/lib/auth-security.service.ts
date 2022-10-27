import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}
  /**
   *
   * @returns
   */
  login(): string {
    return '';
  }
  logout(): void {
    throw new Error('Not implemented');
  }
  signup(): void {
    throw new Error('Not implemented');
  }
}
