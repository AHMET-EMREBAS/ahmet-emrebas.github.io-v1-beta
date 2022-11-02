import { compareSync } from 'bcrypt';
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
    console.log('Auth Service');

    console.table(found);

    if (found && found.username == username && found.password) {
      const isPasswordMatch = compareSync(password, found.password);

      console.log('Is Password Match : ', isPasswordMatch);

      if (isPasswordMatch === true) {
        return found;
      }
    }
    console.log('Password not match!');

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
