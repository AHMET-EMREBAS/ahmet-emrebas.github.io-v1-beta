import { Repository } from 'typeorm';

import {
  ConsoleLogger,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Logger } from './logger.entity';

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(
    @InjectRepository(Logger) private readonly repo: Repository<Logger>
  ) {
    super('Api');
  }
}
