import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Article,
  ArticleView,
} from '../entities';

@Injectable()
export class ArticleService extends ResourceService<Article, ArticleView> {
  constructor(
    @InjectRepository(Article) repo: Repository<Article>,
    @InjectRepository(ArticleView) viewRepo: Repository<ArticleView>
  ) {
    super(repo, viewRepo);
  }
}
