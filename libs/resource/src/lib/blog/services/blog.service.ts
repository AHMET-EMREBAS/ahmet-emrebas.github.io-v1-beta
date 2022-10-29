import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Blog,
  BlogView,
} from '../entities';

@Injectable()
export class BlogService extends ResourceService<Blog, BlogView> {
  constructor(
    @InjectRepository(Blog) repo: Repository<Blog>,
    @InjectRepository(BlogView) viewRepo: Repository<BlogView>
  ) {
    super(repo, viewRepo);
  }
}
