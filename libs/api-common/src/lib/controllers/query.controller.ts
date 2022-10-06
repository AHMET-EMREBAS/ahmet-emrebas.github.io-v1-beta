import { ClassConstructor } from 'class-transformer';
import { Repository } from 'typeorm';

import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Role } from '../decorators/role.meta';
import { QueryDTO } from '../dto/query.dto';
import { WhereDTO } from '../dto/where.dto';

export interface QueryControllerOptions {
  entity: ClassConstructor<any>;
}

export function QueryController(options: QueryControllerOptions) {
  const SINGULAR_PATH = options.entity.name.toLowerCase();
  const PLURAL_PATH = SINGULAR_PATH + 's';

  @Role(`Read ${options.entity.name}`)
  @Controller()
  class QController {
    constructor(
      @InjectRepository(options.entity)
      public readonly repository: Repository<any>
    ) {}

    /**
     * Get All entities
     * @param queryDTO
     * @param whereDTO
     * @returns
     */
    @Get(PLURAL_PATH)
    getAll(
      @Query(new ValidationPipe(), new ValidationPipe({ transform: true }))
      queryDTO: QueryDTO,
      @Query(new ValidationPipe(), new ValidationPipe({ transform: true }))
      whereDTO: WhereDTO
    ) {
      console.log('Query DTO: ', queryDTO);
      console.log('Where DTO: ', whereDTO);
      return this.repository.find({
        ...queryDTO,
        where: whereDTO,
      });
    }

    @Get(SINGULAR_PATH + '/:id')
    getOneById(@Param('id', ParseIntPipe) id: number) {
      return this.repository.findOneBy({ id });
    }
  }

  return QController;
}
