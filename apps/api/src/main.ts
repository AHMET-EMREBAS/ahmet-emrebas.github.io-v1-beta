/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { join } from 'path';
import * as favicon from 'serve-favicon';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  app.use(favicon(join(__dirname, 'assets', 'favicon.ico')));

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Resource api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
