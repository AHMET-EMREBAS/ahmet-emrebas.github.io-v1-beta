import { Module } from '@nestjs/common';

import { CommonModules } from './app-common.module';
import { ResouceModules } from './app-resource.module';

@Module({
  imports: [...CommonModules, ...ResouceModules],
})
export class AppModule {}
