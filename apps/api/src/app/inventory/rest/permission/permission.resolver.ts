import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  Permission,
  PermissionView,
  CreatePermissionDto,
  UpdatePermissionDto,
} from '../../models/permission';

import { PermissionViewService } from './permission-view.service';
import { PermissionService } from './permission.service';

const pubSub = new PubSub();

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(
    private readonly service: PermissionService,
    private readonly viewService: PermissionViewService
  ) {}

  @Query(() => [Permission])
  readPermission(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['name']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Permission)
  readPermissionById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Permission)
  writePermission(@Args('permission') body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updatePermission(
    @Args('id') id: number,
    @Args('permission') body: UpdatePermissionDto
  ) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deletePermission(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Permission)
  onSavePermission() {
    return pubSub.asyncIterator('savedPermission');
  }
}
