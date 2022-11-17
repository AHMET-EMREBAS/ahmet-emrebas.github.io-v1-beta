/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import * as favicon from 'serve-favicon';

import {
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const GLOBAL_PREFIX = 'api';

  const PORT = process.env.PORT || 3333;

  // Enable request from different origins
  app.enableCors();

  // app.use(helmet.default());

  // Share teh favicon
  app.use(favicon(join(__dirname, 'favicon.ico')));

  // Parse cookies
  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
      },
      forbidUnknownValues: true,
    })
  );

  // Configure swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Store Management System')
    .setContact(
      'Ahmet Emrebas',
      'https://ahmet-emrebas.github.io',
      'aemrebas.dev@gmail.com'
    )
    .setDescription('')
    .setVersion('1.0.0')

    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(GLOBAL_PREFIX, app, document);

  await app.listen(PORT);
  Logger.log(
    `🚀 Application is running on: http://localhost:${PORT}/${GLOBAL_PREFIX}`
  );
}

bootstrap();
