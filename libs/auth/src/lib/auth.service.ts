import { compare } from 'bcrypt';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { Sub } from './sub/entity/sub.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Sub) private readonly authUserService: Repository<Sub>,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    const found = await this.authUserService.findOneBy({ username });

    if (found && found.username == username && found.password) {
      const isPasswordMatch = await compare(password, found.password);

      if (isPasswordMatch === true) {
        return found;
      }
    }

    return null;
  }

  login(user: Sub) {
    return {
      accessToken: this.jwtService.sign({
        uuid: user.uuid,
        permission: user.permission,
      }),
    };
  }
}
