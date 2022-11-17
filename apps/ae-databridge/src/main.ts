import * as cookieParser from 'cookie-parser';
// import * as helmet from 'helmet';
import { join } from 'path';
import * as favicon from 'serve-favicon';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app/app.module';

const GLOBAL_PREFIX = 'api';

const PORT = process.env.PORT || 3333;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.enableCors();
  // app.use(helmet.default());
  app.use(favicon(join(__dirname, 'favicon.ico')));
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
}

bootstrap();
