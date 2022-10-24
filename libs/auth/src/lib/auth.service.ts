import { compare } from 'bcrypt';
import { User } from 'models';
import { Repository } from 'typeorm';

import {
  Injectable,
  Optional,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

interface IUser {
  id: number;
  username: string;
  password: string;
}
@Injectable()
export class AuthService {
  constructor(
    @Optional()
    @InjectRepository(User)
    private readonly userRpo: Repository<IUser>,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userRpo?.findOneBy({ username });

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
      permissions: user.permissions,
      username: user.username,
      sub: user.id,
    };
    return this.jwtService.sign(payload);
  }
}
