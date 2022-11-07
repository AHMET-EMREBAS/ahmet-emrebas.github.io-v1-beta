import {
  canAdministrate,
  canRead,
} from 'core';
import {
  Sub,
  SubView,
} from 'models/sub';

import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubPostController } from './sub-post.controller';
import { SubQueryController } from './sub-query.controller';
import { SubService } from './sub.service';
import { SubSubscriber } from './sub.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Sub, SubView])],
  controllers: [SubQueryController, SubPostController],
  providers: [SubService, SubSubscriber],
  exports: [SubService],
})
export class SubModule implements OnModuleInit {
  constructor(private readonly service: SubService) {}
  async onModuleInit() {
    await this.service.save({
      username: 'aemrebas.dev@gmail.com',
      password: 'aA123!',
      permission: canAdministrate(),
    });
    await this.service.save({
      username: 'aemrebas.dev1@gmail.com',
      password: 'aA123!',
      permission: canRead('sample'),
    });
  }
}
