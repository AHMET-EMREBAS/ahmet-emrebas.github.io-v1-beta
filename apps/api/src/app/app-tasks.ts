import { LoggerService } from 'core';

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  Cron,
  CronExpression,
} from '@nestjs/schedule';

@Injectable()
export class AppTasks {
  constructor(private readonly logger: LoggerService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  isUp() {
    this.logger.log('System is up.');
  }

  /**
   * Whenever I insert something to database, then run this mentod
   * @param entity
   */
  @OnEvent('*.entity.INSERT')
  uponInsert(entity: Record<string, any>) {
    this.logger.log(JSON.stringify(entity));
  }
}
