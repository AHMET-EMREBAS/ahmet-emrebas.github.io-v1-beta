import { compareSync } from 'bcrypt';
import { IReadUser } from 'common/inventory/interfaces/user';
import { v4 } from 'uuid';

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../rest/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailerService
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
    return this.userService.findOneBy();
  }

  findUserByUsername(username: string) {
    return this.userService.findOneBy({ username });
  }

  findUserByCode(code: string) {
    return this.userService.findOneBy({ code });
  }

  async updateUserCode(id: number, code: string) {
    await this.userService.update(id, { code });
  }

  async updatePassword(id: number, password: string) {
    return this.userService.update(id, { password });
  }

  async forgotPassword(username: string) {
    await this.sendSecurityCode(username);

    return {
      message: 'Password reset code is sent.',
    };
  }

  async sendSecurityCode(username: string) {
    const foundUser = await this.userService.findOneByOrFail({ username });

    const code = v4();

    await this.userService.update(foundUser.id, { code });

    await this.mailService.sendMail({
      subject: 'Forgot Password',
      template: 'message',
      to: username,
      context: {
        subject: 'Forgot Password',
        message: 'This is your one-time password-reset code.',
        code,
        link: `http://localhost:4200/#/?code=${code}&username=${username}`,
        linkLabel: 'Reset Password',
      },
    });
  }

  async resetPassword(username: string, code: string, newPassword: string) {
    const foundUser = await this.userService.findOneByOrFail({
      code,
      username,
    });

    await this.userService.update(foundUser.id, {
      password: newPassword,
      code: v4(),
    });

    return { message: 'Password is updated.' };
  }
}
