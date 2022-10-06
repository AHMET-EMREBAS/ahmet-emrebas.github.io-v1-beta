import { Store } from 'api-common';
import { Repository } from 'typeorm';

import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

@ApiTags(StoreController.name)
@Controller()
export class StoreController {
  constructor(
    @InjectRepository(Store) private readonly storeRepo: Repository<Store>
  ) {}

  @Get('stores')
  getStores(@Query() queryDTO: any) {
    return this.storeRepo.find({ ...queryDTO });
  }
}
