import {
  Logger,
  Module,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth-security.controller';

const logger = new Logger('Security Module');

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [AuthController],
  providers: [
    {
      provide: Logger,
      useValue: logger,
    },
  ],
})
export class ApiSecurityModule {}
