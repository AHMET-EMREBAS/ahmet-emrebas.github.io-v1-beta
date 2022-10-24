/* eslint-disable @typescript-eslint/no-unused-vars */
import { ClassConstructor } from 'class-transformer';

import {
  Get,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { entityConsts } from './controller-paths';
import { ID } from './param.decorators';
import { Permission } from './permission.metadata';
import {
  PaginatorDTO,
  QueryOptionsDTO,
  WhereQueryDTO,
} from './query-options.dto';
import { RepositoryService } from './repository.service';

export interface QueryControllerOptions {
  singularName: string;
  pluralName?: string;
  entity: ClassConstructor<any>;
}

/**
 * Designed for entity views only. Contains only the find all and find by id operations.
 * @param options
 * @returns
 */
export function QueryController<T>(options: QueryControllerOptions) {
  const {
    SINGULAR_PATH,
    PLURAL_PATH,
    ID_PATH,
    DELETE_ONE_RELATION_PATH,
    MANY_RELATION_PATH,
    ONE_RELATION_PATH,
    INCREMENT_PATH,
    DESCREMENT_PATH,
  } = entityConsts(options.singularName, options.pluralName);

  const QueryValidationDTO = new ValidationPipe({
    transform: true,
    skipMissingProperties: true,
    skipNullProperties: true,
    skipUndefinedProperties: true,
    transformOptions: { exposeUnsetFields: false },
    validationError: {
      target: false,
      value: false,
    },
  });

  class CrudBaseController {
    constructor(public readonly service: RepositoryService<T>) {}

    @Permission(`get:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Find all ${PLURAL_PATH}.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Get(PLURAL_PATH)
    findAll(
      @Query(QueryValidationDTO) paginatorDTO: PaginatorDTO,
      @Query(QueryValidationDTO) whereQuery: WhereQueryDTO,
      @Query(QueryValidationDTO) queryOptions: QueryOptionsDTO
    ) {
      return this.service.find({
        ...whereQuery,
        ...paginatorDTO,
        ...queryOptions,
      });
    }

    @Permission(`get:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Find one ${SINGULAR_PATH} by id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Get(ID_PATH)
    findOneById(@ID() id: number) {
      return this.service.findOneById(id);
    }
  }

  return CrudBaseController;
}
