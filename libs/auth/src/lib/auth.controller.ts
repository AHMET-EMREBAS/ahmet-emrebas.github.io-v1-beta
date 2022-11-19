import {
  Request,
  Response,
} from 'express';

import {
  Body,
  Controller,
  Get,
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

import { IAuthUser } from './auth-user';
import { AuthService } from './auth.service';
import {
  GetUser,
  PublicResource,
} from './decorators';
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

  @PublicResource()
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login' })
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const token = await this.authService.login(req.user as IAuthUser);
    res.cookie('auth', token.accessToken);
    res.end();
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
  @Post('has-permission')
  hasPermission(
    @Query('permission') permission: string,
    @GetUser() user: IAuthUser
  ) {
    return this.authService.hasPermission(permission, user);
  }
}
