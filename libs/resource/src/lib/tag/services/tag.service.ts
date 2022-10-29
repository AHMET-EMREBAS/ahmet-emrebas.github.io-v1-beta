import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Tag,
  TagView,
} from '../entities';

@Injectable()
export class TagService extends ResourceService<Tag, TagView> {
  constructor(
    @InjectRepository(Tag) repo: Repository<Tag>,
    @InjectRepository(TagView) viewRepo: Repository<TagView>
  ) {
    super(repo, viewRepo);
  }
}
