import { AuthModule } from 'auth';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sub } from './entity/sub.entity';
import { SubAuthService } from './sub-auth.service';
import { SubController } from './sub.controller';

@Module({
  controllers: [SubController],
  imports: [
    TypeOrmModule.forFeature([Sub]),
    AuthModule.configure(
      {
        secret: 'SomeSecret',
        signOptions: { expiresIn: '30d' },
      },
      SubAuthService,
      [Sub]
    ),
  ],
  providers: [SubAuthService],
})
export class SubModule {}
