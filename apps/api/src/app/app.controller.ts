import { EmailService } from 'core';

import {
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(AppController.name)
@Controller()
export class AppController {
  constructor(private readonly emailService: EmailService) {}
  @Get()
  get() {
    return 'Hello there';
  }

  @Post()
  email() {
    this.emailService.send({
      to: 'aemrebas.dev@gmail.com',
      message: 'Hello Ahmet',
      subject: 'some subject',
    });
  }
}
