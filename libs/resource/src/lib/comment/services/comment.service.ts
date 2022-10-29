import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Comment,
  CommentView,
} from '../entities';

@Injectable()
export class CommentService extends ResourceService<Comment, CommentView> {
  constructor(
    @InjectRepository(Comment) repo: Repository<Comment>,
    @InjectRepository(CommentView) viewRepo: Repository<CommentView>
  ) {
    super(repo, viewRepo);
  }
}
