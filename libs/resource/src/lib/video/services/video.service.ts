import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Video,
  VideoView,
} from '../entities';

@Injectable()
export class VideoService extends ResourceService<Video, VideoView> {
  constructor(
    @InjectRepository(Video) repo: Repository<Video>,
    @InjectRepository(VideoView) viewRepo: Repository<VideoView>
  ) {
    super(repo, viewRepo);
  }
}
