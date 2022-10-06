import {
  PriceLevel,
  Store,
  StoreView,
} from 'api-common';

import { Module } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';

import { ResourceModule } from './resources/resource.module';

@Module({
  imports: [
    ResourceModule({
      viewEntity: StoreView,
      entities: [Store, PriceLevel, StoreView],
      createDTO: Store,
      updateDTO: PartialType(Store),
    }),
    ResourceModule({
      viewEntity: PriceLevel,
      entities: [PriceLevel],
      createDTO: PriceLevel,
      updateDTO: PartialType(PriceLevel),
    }),
  ],
})
export class ApiInventoryModule {}
