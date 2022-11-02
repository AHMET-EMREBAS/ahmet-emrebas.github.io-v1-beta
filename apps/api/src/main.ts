import * as cookieParser from 'cookie-parser';
// import * as helmet from 'helmet';
import { join } from 'path';
import * as favicon from 'serve-favicon';

import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import {
  GLOBAL_PREFIX,
  PORT,
} from './config';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(GLOBAL_PREFIX);

  // Enable request from different origins
  app.enableCors();

  // app.use(helmet.default());

  // Share teh favicon
  app.use(favicon(join(__dirname, 'favicon.ico')));

  // Parse cookies
  app.use(cookieParser());

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

  // Start app
  await app.listen(PORT);
})();
