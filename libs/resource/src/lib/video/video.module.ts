import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  VideoController,
  VideoOwnController,
} from './controllers';
import {
  Video,
  VideoSubscriber,
  VideoView,
} from './entities';
import { VideoService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Video, VideoView])],
  controllers: [VideoController, VideoOwnController],
  providers: [VideoService, VideoSubscriber],
  exports: [VideoService],
})
export class VideoModule {}
