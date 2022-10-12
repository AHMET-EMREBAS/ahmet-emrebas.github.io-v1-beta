import { ClassConstructor } from 'class-transformer';

import {
  Get,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { BaseEntity } from './base.entity';
import { entityConsts } from './controller-paths';
import { ID } from './param.decorators';
import { Permission } from './permission.metadata';
import {
  PaginatorDTO,
  QueryOptionsDTO,
  WhereQueryDTO,
} from './query-options.dto';
import { RepositoryService } from './repository.service';

export interface ControllerOptions {
  singularName: string;
  pluralName?: string;
  entity: ClassConstructor<any>;
  createDTO: ClassConstructor<any>;
  updateDTO: ClassConstructor<any>;
  [key: string]: any;
}
export function QueryController<T extends BaseEntity>(
  options: ControllerOptions
) {
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

  const CreateDTOValidationPipe = new ValidationPipe({
    expectedType: options.createDTO,
    transform: true,
    transformOptions: { exposeUnsetFields: false },
    validationError: {
      target: false,
      value: false,
    },
  });

  const UpdateDTOValidationPipe = new ValidationPipe({
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

  class BController {
    constructor(public readonly service: RepositoryService<T>) {}

    @Permission({ get: options.entity.name })
    @Get(PLURAL_PATH)
    findAll(
      @Query(UpdateDTOValidationPipe) paginatorDTO: PaginatorDTO,
      @Query(UpdateDTOValidationPipe) whereQuery: WhereQueryDTO,
      @Query(UpdateDTOValidationPipe) queryOptions: QueryOptionsDTO
    ) {
      return this.service.find({
        ...whereQuery,
        ...paginatorDTO,
        ...queryOptions,
      });
    }

    @Permission({ get: options.entity.name })
    @Get(ID_PATH)
    findOneById(@ID() id: number) {
      return this.service.findOneById(id);
    }
  }

  return BController;
}
