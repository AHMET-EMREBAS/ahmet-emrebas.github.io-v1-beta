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
/**
 * Complete controller including all database operations.
 * @param options
 * @returns
 */
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
    transformOptions: {
      exposeUnsetFields: false,
    },
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
    transformOptions: {
      exposeUnsetFields: false,
    },

    validationError: {
      target: false,
      value: false,
    },
  });

  const QueryValidationPipe = new ValidationPipe({
    transform: true,
    transformOptions: { exposeDefaultValues: false, exposeUnsetFields: false },
    skipMissingProperties: true,
  });

  class CrudBaseController {
    constructor(public readonly service: RepositoryService<T>) {}

    @Permission(`get:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Find all ${PLURAL_PATH}.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Get(PLURAL_PATH)
    findAll(
      @Query(QueryValidationPipe)
      paginatorDTO: PaginatorDTO,
      @Query(QueryValidationPipe)
      whereQuery: WhereQueryDTO,
      @Query(QueryValidationPipe)
      queryOptions: QueryOptionsDTO
    ) {
      console.log(paginatorDTO, whereQuery, queryOptions);
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

    @Permission(`post:${SINGULAR_PATH}`)
    @ApiBody({ type: options.createDTO })
    @ApiOperation({ summary: `Save one ${SINGULAR_PATH}.` })
    @ApiCreatedResponse()
    @ApiInternalServerErrorResponse()
    @ApiUnprocessableEntityResponse()
    @Post(SINGULAR_PATH)
    save(@Body(CreateDTOValidationPipe) body: typeof options.createDTO) {
      return this.service.save(body as any);
    }

    @Permission(`put:${SINGULAR_PATH}`)
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

    @Permission(`delete:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Delete one ${SINGULAR_PATH} by id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Delete(ID_PATH)
    delete(
      @ID() id: number,
      @Query(UpdateDTOValidationPipe) queryOptions: QueryOptionsDTO
    ) {
      console.log(id, queryOptions);
      return this.service.delete(id, queryOptions.hardDelete);
    }

    @Permission(`put:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Add relation by relation name and id.` })
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

    @Permission(`delete:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Remove relation by relation name and id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Delete(MANY_RELATION_PATH)
    removeRelation(
      @ID() id: number,
      @RelationId() relationId: number,
      @RelationName() relation: string
    ) {
      return this.service.addRelation(id, relation, relationId);
    }

    @Permission(`put:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Set relation by relation name and id.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Put(ONE_RELATION_PATH)
    setRelation(
      @ID() id: number,
      @RelationId() relationId: number,
      @RelationName() relation: string
    ) {
      return this.service.setRelation(id, relation, relationId);
    }

    @Permission(`delete:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Unset relation by relation name.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Delete(DELETE_ONE_RELATION_PATH)
    unsetRelation(@ID() id: number, @RelationName() relation: string) {
      return this.service.unsetRelation(id, relation);
    }

    @Permission(`put:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Increment property by value.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Put(INCREMENT_PATH)
    increment(@ID() id: number, @Body() body: IncrementFieldDTO) {
      return this.service.increment({ id } as any, body);
    }

    @Permission(`put:${SINGULAR_PATH}`)
    @ApiOperation({ summary: `Decrement property by value.` })
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @Put(DESCREMENT_PATH)
    decrement(@ID() id: number, @Body() body: IncrementFieldDTO) {
      return this.service.decrement({ id } as any, body);
    }
  }

  return CrudBaseController;
}
