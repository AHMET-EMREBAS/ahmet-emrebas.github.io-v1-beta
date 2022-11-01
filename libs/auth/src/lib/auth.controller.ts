import { Request } from 'express';
import { TransformPipe } from 'transformers';

import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { IUser } from './user.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(
    @Body(ValidationPipe, TransformPipe) loginDto: LoginDto,
    @Req() req: Request
  ) {
    return this.authService.login(req.user as IUser);
  }

  @Get()
  profile(@Req() req: Request) {
    return req.user;
  }
}
