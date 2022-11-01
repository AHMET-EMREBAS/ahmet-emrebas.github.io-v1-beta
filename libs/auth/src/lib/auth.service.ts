import { compare } from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthUserService } from './auth-user.service';
import { IUser } from './user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly authUserService: AuthUserService<IUser>,
    private readonly jwtService: JwtService
  ) {}
  async validateUser(username: string, password: string) {
    const found = await this.authUserService.findByUsername(username);

    const isPasswordMatch = await compare(password, found.password);

    if (isPasswordMatch === true) {
      return found;
    }
    return null;
  }

  login(user: IUser) {
    return this.jwtService.sign(user);
  }
}
