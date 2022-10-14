import { compare } from 'bcrypt';
import { Repository } from 'typeorm';

import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface IUser {
  id: number;
  username: string;
  password: string;
}
@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private readonly userRpo: Repository<IUser>,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userRpo.findOneBy({ username });

    if (user && user.password) {
      const isPasswordCorrect = await compare(pass, user.password);
      if (isPasswordCorrect) {
        const { password, ...rest } = user;
        return rest;
      }
    }
    return null;
  }

  async login(user: any): Promise<string> {
    const payload = {
      role: user.role,
      username: user.username,
      sub: user.id,
    };
    return this.jwtService.sign(payload);
  }
}
