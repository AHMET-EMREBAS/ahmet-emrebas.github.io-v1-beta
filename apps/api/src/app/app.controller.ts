import {
  Controller,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(AppController.name)
@Controller()
export class AppController {
  @Get()
  get() {
    return 'Hello there';
  }
}
