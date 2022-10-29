import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  NotificationController,
  NotificationOwnController,
} from './controllers';
import {
  Notification,
  NotificationSubscriber,
  NotificationView,
} from './entities';
import { NotificationService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, NotificationView])],
  controllers: [NotificationController, NotificationOwnController],
  providers: [NotificationService, NotificationSubscriber],
  exports: [NotificationService],
})
export class NotificationModule {}
