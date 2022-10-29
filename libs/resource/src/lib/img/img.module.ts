import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  ImgController,
  ImgOwnController,
} from './controllers';
import {
  Img,
  ImgSubscriber,
  ImgView,
} from './entities';
import { ImgService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Img, ImgView])],
  controllers: [ImgController, ImgOwnController],
  providers: [ImgService, ImgSubscriber],
  exports: [ImgService],
})
export class ImgModule {}
