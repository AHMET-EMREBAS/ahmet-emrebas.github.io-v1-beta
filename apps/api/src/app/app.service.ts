import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  dosome() {
    console.log('App Service do something');
  }
}
