import { ApiInventoryModule } from 'api-inventory';

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiInventoryModule.configure()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
