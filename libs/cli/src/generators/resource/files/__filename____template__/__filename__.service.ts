import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { <%= classname %>View } from './entities';
import { <%= classname %> } from './entities/<%= filename %>.entity';

@Injectable()
export class <%= classname %>Service extends ResourceService<<%= classname %>, <%= classname %>View> {
  constructor(
    @InjectRepository(<%= classname %>) repo: Repository<<%= classname %>>,
    @InjectRepository(<%= classname %>View) viewRepo: Repository<<%= classname %>View>
  ) {
    super(repo, viewRepo);
  }
}
