import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Project,
  ProjectView,
} from '../entities';

@Injectable()
export class ProjectService extends ResourceService<Project, ProjectView> {
  constructor(
    @InjectRepository(Project) repo: Repository<Project>,
    @InjectRepository(ProjectView) viewRepo: Repository<ProjectView>
  ) {
    super(repo, viewRepo);
  }
}
