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
    const foundUser = await this.userService.findOneByOrFail({
      username,
    });

    const isPasswordMatch = compareSync(password, foundUser.password);

    return isPasswordMatch ? foundUser : null;
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
    console.log('[Auth Service] has permission :  ', permission);
    return {
      canActivate: !!(
        (await this.userService.findOneByOrFail({
          id: user.id,
        })) as unknown as IReadUser
      ).permission.find((e) => e.name === permission),
    };
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

  async resetPassword(username: string, code: string, password: string) {
    const { id } = await this.userService.findOneByOrFail({ code, username });

    await this.userService.update(id, { password, code: v4() });

    return { message: 'Password is updated.' };
  }
}
