import {
  Request,
  Response,
} from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';

import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(AppController.name)
@Controller()
export class AppController {
  @Get()
  get() {
    return 'Hello there';
  }

  @Get('admin')
  async admin(@Req() req: Request, @Res() res: Response) {
    const contentPath = join(__dirname, 'public', 'admin', 'index.html');

    const stream = createReadStream(contentPath);

    stream.on('end', () => {
      res.end();
    });

    stream.on('err', () => {
      res.end();
    });

    stream.on('data', (data) => {
      res.write(data);
    });
  }
}
