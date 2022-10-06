import { ClassConstructor } from 'class-transformer';
import { Repository } from 'typeorm';

import {
  Controller,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

import { Role } from '../decorators/role.meta';

export interface DeleteControllerOptions {
  entity: ClassConstructor<any>;
}
export function DeleteController(options: DeleteControllerOptions) {
  const SINGULAR_PATH = options.entity.name.toLowerCase();

  @ApiTags(`Delete ${options.entity.name} Controller`)
  @Role(`Delete ${options.entity.name}`)
  @Controller()
  class DController {
    constructor(
      @InjectRepository(options.entity)
      public readonly repository: Repository<any>
    ) {}

    @Delete(SINGULAR_PATH + '/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.repository.delete(id);
    }
  }

  return DController;
}
