import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Note,
  NoteView,
} from '../entities';

@Injectable()
export class NoteService extends ResourceService<Note, NoteView> {
  constructor(
    @InjectRepository(Note) repo: Repository<Note>,
    @InjectRepository(NoteView) viewRepo: Repository<NoteView>
  ) {
    super(repo, viewRepo);
  }
}
