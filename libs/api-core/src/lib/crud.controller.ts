import { ClassConstructor } from 'class-transformer';

import {
  Body,
  Delete,
  Get,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { BaseEntity } from './base.entity';
import { entityConsts } from './controller-paths';
import {
  ID,
  RelationId,
  RelationName,
} from './param.decorators';
import { Permission } from './permission.metadata';
import {
  IncrementFieldDTO,
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

export function CrudController<T extends BaseEntity>(
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
    expectedType: options.updateDTO,
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
    @ApiOperation({ summary: `Find all ${PLURAL_PATH}.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
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
    @ApiOperation({ summary: `Find one ${SINGULAR_PATH} by id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Get(ID_PATH)
    findOneById(@ID() id: number) {
      return this.service.findOneById(id);
    }

    @Permission({ post: options.entity.name })
    @ApiBody({ type: options.createDTO })
    @ApiOperation({ summary: `Save one ${SINGULAR_PATH} by id.` })
    @ApiCreatedResponse()
    @ApiInternalServerErrorResponse()
    @ApiUnprocessableEntityResponse()
    @Post(SINGULAR_PATH)
    save(@Body(CreateDTOValidationPipe) body: typeof options.createDTO) {
      return this.service.save(body as any);
    }

    @Permission({ put: options.entity.name })
    @ApiBody({ type: options.updateDTO })
    @ApiOperation({ summary: `Update one ${SINGULAR_PATH}.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @ApiUnprocessableEntityResponse()
    @Put(ID_PATH)
    update(
      @ID() id: number,
      @Body(UpdateDTOValidationPipe) body: typeof options.updateDTO
    ) {
      return this.service.update(id, body as any);
    }

    @Permission({ delete: options.entity.name })
    @ApiOperation({ summary: `Delete one ${SINGULAR_PATH} by id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Delete(ID_PATH)
    delete(
      @ID() id: number,
      @Query(UpdateDTOValidationPipe) queryOptions: QueryOptionsDTO
    ) {
      return this.service.delete(id, queryOptions.hardDelete);
    }

    @Permission({ put: options.entity.name })
    @ApiOperation({ summary: `Add relation by relation name an id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Put(MANY_RELATION_PATH)
    addRelation(
      @ID() id: number,
      @RelationId() relationId: number,
      @RelationName() relation: string
    ) {
      this.service.addRelation(id, relation, relationId);
    }

    @Permission({ delete: options.entity.name })
    @ApiOperation({ summary: `Remove relation by relation name and id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Delete(MANY_RELATION_PATH)
    removeRelation(
      @ID() id: number,
      @RelationId() relationId: number,
      @RelationName() relation: string
    ) {
      this.service.addRelation(id, relation, relationId);
    }

    @Permission({ put: options.entity.name })
    @ApiOperation({ summary: `Set relation by relation name and id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Put(ONE_RELATION_PATH)
    setRelation(
      @ID() id: number,
      @RelationId() relationId: number,
      @RelationName() relation: string
    ) {
      this.service.setRelation(id, relation, relationId);
    }

    @Permission({ delete: options.entity.name })
    @ApiOperation({ summary: `Unset relation by relation name.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Delete(DELETE_ONE_RELATION_PATH)
    unsetRelation(@ID() id: number, @RelationName() relation: string) {
      this.service.unsetRelation(id, relation);
    }

    @Permission({ put: options.entity.name })
    @ApiOperation({ summary: `Increment property by value.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Put(INCREMENT_PATH)
    increment(@ID() id: number, @Body() body: IncrementFieldDTO) {
      return this.service.increment({ id } as any, body);
    }

    @Permission({ put: options.entity.name })
    @ApiOperation({ summary: `Decrement property by value.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Put(DESCREMENT_PATH)
    decrement(@ID() id: number, @Body() body: IncrementFieldDTO) {
      return this.service.decrement({ id } as any, body);
    }
  }

  return BController;
}
