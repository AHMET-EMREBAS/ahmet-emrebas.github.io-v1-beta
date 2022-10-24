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
  const globalPrefix = 'api';

  const port = process.env.PORT || 3333;
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();

  app.use(favicon(join(__dirname, 'assets', 'favicon.ico')));
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setContact(
      'Ahmet Emrebas',
      'https://ahmet-emrebas.github.io',
      'aemrebas.dev@gmail.com'
    )
    .setTitle('Api')
    .setDescription('Resource api')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // const document = JSON.parse(
  //   readFileSync(join(__dirname, 'assets', 'openapi.json')).toString()
  // );
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
