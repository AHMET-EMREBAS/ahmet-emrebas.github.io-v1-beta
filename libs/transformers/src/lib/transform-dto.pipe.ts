import {
  ClassConstructor,
  plainToInstance,
} from 'class-transformer';

import {
  ArgumentMetadata,
  PipeTransform,
} from '@nestjs/common';

export class TransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const instance = plainToInstance(
      metadata.metatype as ClassConstructor<any>,
      value,
      {
        exposeUnsetFields: false,
        excludeExtraneousValues: true,
      }
    );

    return instance;
  }
}
