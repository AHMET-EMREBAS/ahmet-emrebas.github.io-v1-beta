import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  Cron,
  CronExpression,
} from '@nestjs/schedule';

@Injectable()
export class AppTasks {
  @Cron(CronExpression.EVERY_10_SECONDS)
  isUp() {
    console.log('Cron Task');
  }

  /**
   * Whenever I insert something to database, then run this mentod
   * @param entity
   */
  @OnEvent('*.entity.INSERT')
  uponInsert() {
    console.log('Cron Task');
  }
}
