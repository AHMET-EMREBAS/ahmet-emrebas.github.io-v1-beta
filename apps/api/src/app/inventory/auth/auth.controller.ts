import { IReadUser } from 'common/inventory/interfaces/user';
import {
  Request,
  Response,
} from 'express';

import {
  Body,
  Controller,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import {
  CanRead,
  PublicResource,
  Sub,
} from './decorators';
import {
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
} from './dto/login.dto';
import { LocalAuthGuard } from './guards';

@ApiTags(AuthController.name)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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

  @Post('logout')
  logout(@Res() res: Response) {
    res.cookie('authorization', '');
    res.end();
  }

  @CanRead('profile')
  @Post('has-permission')
  async hasPermission(
    @Query('permission') permission: string,
    @Sub() user: IReadUser
  ) {
    const result = await this.authService.hasPermission(permission, user);
    console.log('[auth controller ] has permission: permission :', permission);
    console.log('[auth controller ] has permission: result :', result);
    return result;
  }

  @PublicResource()
  @Post('forgot-password')
  async forgotPassword(@Body() { username }: ForgotPasswordDto) {
    return await this.authService.forgotPassword(username);
  }

  @PublicResource()
  @Post('reset-password')
  async resetPassword(
    @Body() { username, code, newPassword }: ResetPasswordDto
  ) {
    return await this.authService.resetPassword(username, code, newPassword);
  }

  @CanRead('profile')
  @Post('is-login')
  async isLogin() {
    return { isLogin: true };
  }
}
