import { ClassConstructor } from 'class-transformer';
import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Role } from '../decorators/role.meta';

export interface PostControllerOptions {
  entity: ClassConstructor<any>;
  createDTO: ClassConstructor<any>;
  updateDTO: ClassConstructor<any>;
}
export function PostController(options: PostControllerOptions) {
  const SINGULAR_PATH = options.entity.name.toLowerCase();

  @Role(`Write ${options.entity.name}`)
  @Controller()
  class PController {
    constructor(
      @InjectRepository(options.entity)
      public readonly repository: Repository<any>
    ) {}

    @Post(SINGULAR_PATH)
    save(
      @Body(
        new ValidationPipe({ expectedType: options.createDTO }),
        new ValidationPipe({ expectedType: options.createDTO, transform: true })
      )
      body: typeof options.createDTO
    ) {
      return this.repository.save(body);
    }

    @Put(SINGULAR_PATH + '/:id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body(
        new ValidationPipe({ expectedType: options.updateDTO }),
        new ValidationPipe({ expectedType: options.updateDTO, transform: true })
      )
      body: typeof options.updateDTO
    ) {
      return this.repository.update(id, body);
    }
  }

  return PController;
}
