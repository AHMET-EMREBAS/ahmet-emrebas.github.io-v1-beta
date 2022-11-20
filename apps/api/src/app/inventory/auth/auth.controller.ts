import { IReadUser } from 'common/inventory/interfaces/user';
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
    const token = await this.authService.login(req.user as IReadUser);
    res.cookie('auth', token.accessToken);
    res.send(token);
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
    @GetUser() user: IReadUser
  ) {
    return this.authService.hasPermission(permission, user);
  }
}
