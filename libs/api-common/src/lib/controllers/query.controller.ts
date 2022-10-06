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
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

import { Role } from '../decorators/role.meta';
import { QueryDTO } from '../dto/query.dto';
import { WhereDTO } from '../dto/where.dto';

export interface QueryControllerOptions {
  entity: ClassConstructor<any>;
  viewEntity: ClassConstructor<any>;
}

export function QueryController(options: QueryControllerOptions) {
  const SINGULAR_PATH = options.entity.name.toLowerCase();
  const PLURAL_PATH = SINGULAR_PATH + 's';

  @ApiTags(`Query ${options.entity.name} Controller`)
  @Role(`Read ${options.entity.name}`)
  @Controller()
  class QController {
    constructor(
      @InjectRepository(options.viewEntity)
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
      @Query(
        new ValidationPipe({
          transform: true,
          transformOptions: { exposeUnsetFields: false },
        })
      )
      queryDTO: QueryDTO,
      @Query(
        new ValidationPipe({
          transform: true,
          transformOptions: { exposeUnsetFields: false },
        })
      )
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
