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

export async function bootstrap(module: any) {
  const GLOBAL_PREFIX = 'api';

  const PORT = process.env.PORT || 3333;
  const app = await NestFactory.create(module);
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
      stopAtFirstError: true,
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
