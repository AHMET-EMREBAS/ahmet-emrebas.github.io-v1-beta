import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Issue,
  IssueView,
} from '../entities';

@Injectable()
export class IssueService extends ResourceService<Issue, IssueView> {
  constructor(
    @InjectRepository(Issue) repo: Repository<Issue>,
    @InjectRepository(IssueView) viewRepo: Repository<IssueView>
  ) {
    super(repo, viewRepo);
  }
}
