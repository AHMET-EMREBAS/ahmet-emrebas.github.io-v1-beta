import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Notification,
  NotificationView,
} from '../entities';

@Injectable()
export class NotificationService extends ResourceService<Notification, NotificationView> {
  constructor(
    @InjectRepository(Notification) repo: Repository<Notification>,
    @InjectRepository(NotificationView) viewRepo: Repository<NotificationView>
  ) {
    super(repo, viewRepo);
  }
}
