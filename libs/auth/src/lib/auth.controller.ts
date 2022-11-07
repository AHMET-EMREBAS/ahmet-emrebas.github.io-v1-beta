import {
  checkPermission,
  createPermission,
  GetUser,
  Public,
  ReqBody,
} from 'core';
import {
  Request,
  Response,
} from 'express';
import { Sub } from 'models/sub';

import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import {
  JwtAuthGuard,
  LocalAuthGuard,
  PermissionGuard,
} from './guards';

@ApiTags(AuthController.name)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login' })
  @Post('login')
  async login(
    @ReqBody() loginDto: LoginDto,
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

  @UseGuards(JwtAuthGuard)
  @Post('can-activate')
  canActivate(@Body() body: any, @GetUser() user: Sub) {
    console.log(body);

    const permit = createPermission(body.operation + ':' + body.resource);

    return checkPermission(user, permit);
  }
}
