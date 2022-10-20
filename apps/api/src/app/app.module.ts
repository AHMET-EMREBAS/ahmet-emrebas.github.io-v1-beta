import { AuthModule } from 'auth';
import { User } from 'models';
import { join } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(__dirname, 'database', 'main.sqlite'),
      entities: [User],
      subscribers: [],
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
