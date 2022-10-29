import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Email,
  EmailView,
} from '../entities';

@Injectable()
export class EmailService extends ResourceService<Email, EmailView> {
  constructor(
    @InjectRepository(Email) repo: Repository<Email>,
    @InjectRepository(EmailView) viewRepo: Repository<EmailView>
  ) {
    super(repo, viewRepo);
  }
}
