import { compare } from 'bcrypt';
import { Sub } from 'models';
import { SubService } from 'rest';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly subService: SubService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    const found = await this.subService.findOneBy({ username });

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
