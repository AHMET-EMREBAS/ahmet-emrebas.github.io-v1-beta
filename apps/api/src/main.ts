/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import * as favicon from 'serve-favicon';

import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import {
  APP_DESCRIPTION,
  APP_NAME,
  GLOBAL_PREFIX,
  PORT,
} from './config';

(async () => {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix(GLOBAL_PREFIX);

  // Enable request from different origins
  app.enableCors();

  // Share teh favicon
  app.use(favicon(join(__dirname, 'favicon.ico')));

  // Parse cookies
  app.use(cookieParser());

  // Configure swagger documentation
  const config = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(GLOBAL_PREFIX, app, document);

  // Start app
  await app.listen(PORT);
})();
