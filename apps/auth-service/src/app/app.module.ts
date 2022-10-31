import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubModule } from './sub/sub.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/auth.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    SubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
