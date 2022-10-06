import {
  PriceLevel,
  Store,
} from 'api-common';

import { Module } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';

import { ResourceModule } from './resources/resource.module';

@Module({
  imports: [
    ResourceModule({
      entities: [Store],
      createDTO: Store,
      updateDTO: PartialType(Store),
    }),
    ResourceModule({
      entities: [PriceLevel],
      createDTO: PriceLevel,
      updateDTO: PartialType(PriceLevel),
    }),
  ],
})
export class ApiInventoryModule {}
