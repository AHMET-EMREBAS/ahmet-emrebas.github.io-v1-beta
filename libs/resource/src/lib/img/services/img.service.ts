import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Img,
  ImgView,
} from '../entities';

@Injectable()
export class ImgService extends ResourceService<Img, ImgView> {
  constructor(
    @InjectRepository(Img) repo: Repository<Img>,
    @InjectRepository(ImgView) viewRepo: Repository<ImgView>
  ) {
    super(repo, viewRepo);
  }
}
