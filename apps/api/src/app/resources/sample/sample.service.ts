import { RepositoryService } from 'api-core';
import { Sample } from 'models';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService extends RepositoryService<Sample> {}
