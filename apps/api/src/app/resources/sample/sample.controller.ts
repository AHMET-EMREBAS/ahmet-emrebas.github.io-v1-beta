import {
  CreateValidationPipe,
  ID,
  PaginatorDTO,
  Permission,
  QueryOptionsDTO,
  RelationId,
  RelationName,
  UpdateValidationPipe,
  WhereQueryDTO,
} from 'api-core';
import {
  SampleCreateDTO,
  SampleUpdateDTO,
} from 'models';

import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { SampleService } from './sample.service';

const SINGULAR_PATH = 'sample';
const PLURAL_PATH = 'samples';
const ID_PATH = SINGULAR_PATH + '/:id';

@Controller()
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Permission(`Read Sample`)
  @Get(PLURAL_PATH)
  findAll(
    @Query(UpdateValidationPipe) paginatorDTO: PaginatorDTO,
    @Query(UpdateValidationPipe) whereQuery: WhereQueryDTO,
    @Query(UpdateValidationPipe) queryOptions: QueryOptionsDTO
  ) {
    return this.sampleService.find({
      ...whereQuery,
      ...paginatorDTO,
      ...queryOptions,
    });
  }

  @Permission(`Read Sample`)
  @Get(ID_PATH)
  findOneById(@ID() id: number) {
    return this.sampleService.findOneById(id);
  }

  @Post(SINGULAR_PATH)
  save(@Body(CreateValidationPipe) body: SampleCreateDTO) {
    this.sampleService.save(body);
  }

  @Put(ID_PATH)
  update(@ID() id: number, @Body(UpdateValidationPipe) body: SampleUpdateDTO) {
    return this.sampleService.update(id, body);
  }

  @Delete(ID_PATH)
  delete(
    @ID() id: number,
    @Query(UpdateValidationPipe) queryOptions: QueryOptionsDTO
  ) {
    if (
      queryOptions.hardDelete === true ||
      queryOptions.hardDelete === 'true'
    ) {
      return this.sampleService.delete(id);
    }

    return this.sampleService.softDelete(id);
  }

  @Put(SINGULAR_PATH + '/many/:id/:relationName/:relationId')
  addRelation(
    @ID() id: number,
    @RelationId() relationId: number,
    @RelationName() relation: string
  ) {
    this.sampleService.addRelation(id, relation, relationId);
  }

  @Delete(SINGULAR_PATH + '/many/:id/:relationName/:relationId')
  removeRelation(
    @ID() id: number,
    @RelationId() relationId: number,
    @RelationName() relation: string
  ) {
    this.sampleService.addRelation(id, relation, relationId);
  }

  @Put(SINGULAR_PATH + '/:id/:relationName/:relationId')
  setRelation(
    @ID() id: number,
    @RelationId() relationId: number,
    @RelationName() relation: string
  ) {
    this.sampleService.setRelation(id, relation, relationId);
  }

  @Delete(SINGULAR_PATH + '/:id/:relation')
  unsetRelation(@ID() id: number, @RelationName() relation: string) {
    this.sampleService.unsetRelation(id, relation);
  }
}
