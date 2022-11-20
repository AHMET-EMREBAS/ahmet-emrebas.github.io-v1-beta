import { compareSync } from 'bcrypt';
import { IReadUser } from 'common/inventory/interfaces/user';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../inventory/rest/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    const found = await this.userService.findOneBy({ username });

    console.log('[Auth SErvice] Found user : ', found.id);

    if (found && found.username == username && found.password) {
      const isPasswordMatch = compareSync(password, found.password);

      console.log('Is password match : ', isPasswordMatch);
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

  async hasPermission(permission: string, user: IReadUser) {
    const found = (await this.userService.findOneBy({
      id: user.id,
    })) as IReadUser;
    return found?.permission?.find((e) => e.name === permission);
  }
}
