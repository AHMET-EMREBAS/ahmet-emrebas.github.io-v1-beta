import { Public } from 'api-core';
import {
  Request,
  Response,
} from 'express';

import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDTO } from './dtos';
import { LocalAuthGuard } from './guards/local.guard';
import { AUTH_COOKIE_NAME } from './jwt.constants';

@ApiTags(AuthController.name)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body(ValidationPipe) loginDto: LoginDTO
  ) {
    const token = await this.authService.login(req['user']);

    res.cookie(AUTH_COOKIE_NAME, token);

    res.send({ message: 'Welcome in' });
  }

  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.end();
  }

  @Get('profile')
  profile(@Req() req: Request) {
    return req['user'];
  }

  resetPassword() {
    console.log('some');
  }
}
