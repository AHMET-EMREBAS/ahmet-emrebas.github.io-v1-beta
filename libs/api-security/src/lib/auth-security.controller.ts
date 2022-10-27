import {
  Controller,
  Get,
  Logger,
  Post,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags(AuthController.name)
@Controller('auth')
export class AuthController {
  constructor(private readonly logger: Logger) {}

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  login() {
    return { message: 'Welcome' };
  }

  @ApiOperation({ summary: 'Signup' })
  @Post('signup')
  signup() {
    return 'Sign up';
  }

  @ApiOperation({
    summary: 'Logout',
    description: `\\
    <h1>Description</h1>
    `,
  })
  @Post('logout')
  logout() {
    return 'Logout';
  }

  @Get('profile')
  profile() {
    return 'Profile';
  }
}
