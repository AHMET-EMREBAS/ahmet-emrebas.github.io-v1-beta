import { Module } from '@nestjs/common';

import { CommonModule } from './app-common.module';
import { InventoryModule } from './inventory';

@Module({
  imports: [CommonModule, InventoryModule],
})
export class AppModule {}
