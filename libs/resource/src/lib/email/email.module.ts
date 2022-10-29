import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  EmailController,
  EmailOwnController,
} from './controllers';
import {
  Email,
  EmailSubscriber,
  EmailView,
} from './entities';
import { EmailService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Email, EmailView])],
  controllers: [EmailController, EmailOwnController],
  providers: [EmailService, EmailSubscriber],
  exports: [EmailService],
})
export class EmailModule {}
