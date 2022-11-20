import { IReadUser } from 'common/inventory/interfaces/user';
import {
  Request,
  Response,
} from 'express';
import { v4 } from 'uuid';

import { MailerService } from '@nestjs-modules/mailer';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import {
  PublicResource,
  Sub,
} from './decorators';
import {
  ForgotPasswordDto,
  LoginDto,
  LoginWithCodeDto,
} from './dto/login.dto';
import {
  JwtAuthGuard,
  LocalAuthGuard,
  PermissionGuard,
} from './guards';

@ApiTags(AuthController.name)
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly mailService: MailerService
  ) {}

  @PublicResource()
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login' })
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const token = await this.authService.login(req.user as IReadUser);
    res.cookie('auth', token.accessToken);
    res.send(token);
  }

  @PublicResource()
  @ApiOperation({ summary: 'Login with username and code' })
  @Post('login-with-code')
  async loginWithCode(
    @Body() loginWithCodeDto: LoginWithCodeDto,
    @Res() res: Response
  ) {
    const foundUser = await this.authService.findUserByUsername(
      loginWithCodeDto.username
    );

    if (foundUser.code + '' == loginWithCodeDto.code + '') {
      await this.authService.updateUserCode(foundUser.username, v4());
      const token = await this.authService.login(foundUser);
      res.cookie('auth', token.accessToken);
      res.send(token);
    }

    if (!foundUser) {
      throw new UnauthorizedException();
    }
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)
  @Get('profile')
  profile() {
    return 'profile';
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Res() res: Response) {
    res.cookie('authorization', '');
    res.end();
  }

  @UseGuards(JwtAuthGuard)
  @Post('has-permission')
  hasPermission(
    @Query('permission') permission: string,
    @Sub() user: IReadUser
  ) {
    return this.authService.hasPermission(permission, user);
  }

  @PublicResource()
  @Post('forgot-password')
  async forgotPassword(@Body() forgotPassword: ForgotPasswordDto) {
    console.log(forgotPassword, '<< request body');
    const foundUser = await this.authService.findUserByUsername(
      forgotPassword.username
    );

    if (!foundUser) {
      return { message: 'User not found!' };
    }
    const onetimecode = Math.floor(Math.random() * 1000) + 1000;

    await this.authService.updateUserCode(foundUser.username, onetimecode + '');

    const result = await this.mailService.sendMail({
      subject: 'Forgot Password',
      template: 'message',
      to: foundUser.username,
      context: {
        subject: 'Forgot Password',
        message: `Here is your one time login code.\n ${onetimecode} `,
      },
    });

    return {
      message:
        'We send you a reset code. Please checkout your email. Use the code to reset your password.',
    };
  }
}
