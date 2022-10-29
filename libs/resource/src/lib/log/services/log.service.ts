import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Log,
  LogView,
} from '../entities';

@Injectable()
export class LogService extends ResourceService<Log, LogView> {
  constructor(
    @InjectRepository(Log) repo: Repository<Log>,
    @InjectRepository(LogView) viewRepo: Repository<LogView>
  ) {
    super(repo, viewRepo);
  }
}
