import { compareSync } from 'bcrypt';
import { ResourceService } from 'core/service';

import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IAuthUser } from './auth-user';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: ResourceService<any>,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    const found = await this.userService.findOneBy({ username });

    console.log('FOund user : ', found);

    if (found && found.username == username && found.password) {
      const isPasswordMatch = compareSync(password, found.password);

      if (isPasswordMatch === true) {
        return found;
      }
    }

    return null;
  }

  login(user: any) {
    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        uuid: user.uuid,
      }),
    };
  }

  async hasPermission(permission: string, user: IAuthUser) {
    const found = await this.userService.findOneBy({ id: user.id });
    return found?.permission?.find((e) => e.name === permission);
  }
}
