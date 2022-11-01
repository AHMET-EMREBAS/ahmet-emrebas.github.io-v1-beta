import {
  Request,
  Response,
} from 'express';
import { TransformPipe } from 'transformers';

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
import { LoginDto } from './dto/login.dto';
import {
  JwtAuthGuard,
  LocalAuthGuard,
  PermissionGuard,
} from './guards';
import { Sub } from './sub/entity/sub.entity';

@ApiTags(AuthController.name)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body(ValidationPipe, TransformPipe) loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const token = await this.authService.login(req.user as Sub);
    res.cookie('auth', token.accessToken);
    res.redirect('auth/profile');
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)
  @Get('profile')
  profile() {
    return 'profile';
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Res() res: Response) {
    res.cookie('auth', '');
    res.redirect('/login');
  }
}
