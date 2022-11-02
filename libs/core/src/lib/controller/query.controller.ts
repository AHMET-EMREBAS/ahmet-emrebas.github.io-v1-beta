import { Response } from 'express';

import {
  Req,
  Res,
} from '@nestjs/common';

import { BaseEntity } from '../entity';
import {
  AddRelationPath,
  CountAll,
  DeleteById,
  FindAll,
  FindOneById,
  IdParam,
  RelationIdParam,
  RelationNameParam,
  RemoveRelationPath,
  ReqQuery,
  SetRelationPath,
  UnSetRelationPath,
} from '../param-decorators';
import {
  HardDelete,
  PaginatorQueryDto,
  ViewQueryDto,
  WhereQueryDto,
  WithDeletedDto,
} from '../query-dtos';
import {
  ReadPermission,
  WritePermission,
} from '../security';
import { CrudService } from '../service';

export function GetQueryController<T extends BaseEntity, V = any>(
  name: string
): any {
  class QueryController {
    constructor(public readonly __service: CrudService<T, V>) {}

    @ReadPermission(name)
    @FindAll()
    findAll(
      @ReqQuery() paginatorDto: PaginatorQueryDto,
      @ReqQuery() withDeleteDto: WithDeletedDto,
      @ReqQuery() whereQueryDto: WhereQueryDto,
      @ReqQuery() viewQueryDto: ViewQueryDto
    ) {
      const query = {
        ...paginatorDto,
        ...withDeleteDto,
        ...whereQueryDto.where,
      };

      if (viewQueryDto.view === true) {
        return this.__service.viewService.find(query);
      }
      return this.__service.find(query);
    }

    @ReadPermission(name)
    @FindOneById()
    findOneById(@IdParam() id: number, @ReqQuery() viewQueryDto: ViewQueryDto) {
      if (viewQueryDto.view === true) {
        return this.__service.viewService.findOneBy({ id } as any);
      }
      return this.__service.findOneBy({ id } as any);
    }

    @ReadPermission(name)
    @CountAll()
    async countAll(@Req() req: Request, @Res() res: Response) {
      return await this.__service.count();
    }

    @WritePermission(name)
    @DeleteById()
    delete(@IdParam() id: number, @ReqQuery() hardDelete: HardDelete) {
      if (hardDelete.hard) {
        return this.__service.delete(id);
      } else {
        return this.__service.softDelete(id);
      }
    }

    @WritePermission(name)
    @DeleteById()
    recover(@IdParam() id: number) {
      return this.__service.recover(id);
    }

    @WritePermission(name)
    @AddRelationPath()
    add(
      @IdParam() id: number,
      @RelationIdParam() relationId: number,
      @RelationNameParam() relationName: string
    ) {
      return this.__service.add(id, relationId, relationName);
    }

    @WritePermission(name)
    @SetRelationPath()
    set(
      @IdParam() id: number,
      @RelationIdParam() relationId: number,
      @RelationNameParam() relationName: string
    ) {
      return this.__service.set(id, relationId, relationName);
    }

    @WritePermission(name)
    @UnSetRelationPath()
    unset(@IdParam() id: number, @RelationNameParam() relationName: string) {
      return this.__service.unset(id, relationName);
    }

    @WritePermission(name)
    @RemoveRelationPath()
    remove(
      @IdParam() id: number,
      @RelationIdParam() relationId: number,
      @RelationNameParam() relationName: string
    ) {
      return this.__service.remove(id, relationId, relationName);
    }
  }

  return QueryController;
}
