import {
  Module,
  ValidationPipeOptions,
} from '@nestjs/common';

import { CommonModules } from './app-common.module';
import { ResouceModules } from './app-resource.module';

@Module({
  imports: [...CommonModules, ...ResouceModules],
  providers: [
    {
      provide: 'ValidationPipeOptions',
      useValue: {
        forbidUnknownValues: true,
      } as ValidationPipeOptions,
    },
  ],
})
export class AppModule {}
