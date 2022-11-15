import { Module } from '@nestjs/common';

import { CommonModule } from './app-common.module';
import { InventoryModule } from './inventory.module';

@Module({
  imports: [CommonModule, InventoryModule],
})
export class AppModule {}
