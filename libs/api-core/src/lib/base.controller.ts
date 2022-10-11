import { ClassConstructor } from 'class-transformer';
import { FindManyOptions } from 'typeorm';
import {
  QueryDeepPartialEntity,
} from 'typeorm/query-builder/QueryPartialEntity';

import {
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiProperty,
} from '@nestjs/swagger';

import { BaseEntity } from './base.entity';
import { RepositoryService } from './repository.service';

class HardDelete {
  @ApiProperty({ required: false })
  hard: boolean | 'true' | 'false';
}

export interface ControllerOptions {
  singularName: string;
  pluralName?: string;
  entity: ClassConstructor<any>;
  createDTO: ClassConstructor<any>;
  updateDTO: ClassConstructor<any>;
  [key: string]: any;
}
export function BaseController<T extends BaseEntity>(
  options: ControllerOptions
) {
  const SINGULAR_PATH = options.singularName.toLowerCase();
  const PLURAL_PATH = options.pluralName
    ? options.pluralName
    : SINGULAR_PATH + 's';

  const ID_PATH = SINGULAR_PATH + '/:id';

  class BController {
    constructor(public readonly repositoryService: RepositoryService<T>) {}

    @ApiBody({
      type: options.createDTO,
    })
    @Post(SINGULAR_PATH)
    save(
      @Body(new ValidationPipe({ expectedType: options.createDTO })) body: T
    ) {
      return this.repositoryService.save(body);
    }

    @Get(PLURAL_PATH)
    findAll(@Query() query: FindManyOptions<T>) {
      return this.repositoryService.find(query);
    }

    @Get(ID_PATH)
    findOneById(@Param('id', ParseIntPipe) id: number) {
      return this.repositoryService.findOneById(id);
    }

    @ApiBody({
      type: options.updateDTO,
    })
    @Put(ID_PATH)
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() body: QueryDeepPartialEntity<T>
    ) {
      return this.repositoryService.update(id, body);
    }

    @Delete(ID_PATH)
    delete(
      @Param('id', ParseIntPipe) id: number,
      @Query() hardDelete: HardDelete
    ) {
      if (hardDelete.hard === true || hardDelete.hard === 'true') {
        return this.repositoryService.delete(id);
      }

      return this.repositoryService.softDelete(id);
    }
  }

  return BController;
}
