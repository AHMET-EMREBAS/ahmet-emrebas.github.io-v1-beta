import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  NoteController,
  NoteOwnController,
} from './controllers';
import {
  Note,
  NoteSubscriber,
  NoteView,
} from './entities';
import { NoteService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Note, NoteView])],
  controllers: [NoteController, NoteOwnController],
  providers: [NoteService, NoteSubscriber],
  exports: [NoteService],
})
export class NoteModule {}
