/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as cookieParser from 'cookie-parser';
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

  app.use(cookieParser());

  // Enable request from different origins
  app.enableCors();

  // Share teh favicon
  app.use(favicon(join(__dirname, 'favicon.ico')));

  // Configure swagger documentation
  const config = new DocumentBuilder().setTitle('Auth Service').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3333;

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
