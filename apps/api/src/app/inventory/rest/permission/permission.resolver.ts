import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth/decorators';

import { Permission, PermissionView } from './entity';

import { CreatePermissionDto, UpdatePermissionDto } from './dto';

import { PermissionViewService } from './permission-view.service';
import { PermissionService } from './permission.service';

const pubSub = new PubSub();

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(
    private readonly service: PermissionService,
    private readonly viewService: PermissionViewService
  ) {}

  @CanRead('Permission')
  @Query(() => [Permission])
  readPermission(
    @Args('paginator') paginatorDto: PaginatorDto<Permission | PermissionView>,
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

  @CanRead('Permission')
  @Query(() => Permission)
  readPermissionById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Permission')
  @Mutation(() => Permission)
  writePermission(@Args('permission') body: CreatePermissionDto) {
    return this.service.save(body);
  }

  @CanWrite('Permission')
  @Mutation(() => Boolean)
  updatePermission(
    @Args('id') id: number,
    @Args('permission') body: UpdatePermissionDto
  ) {
    return this.service.update(id, body);
  }

  @CanWrite('Permission')
  @Mutation(() => Boolean)
  deletePermission(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Permission')
  @Subscription(() => Permission)
  onSavePermission() {
    return pubSub.asyncIterator('savedPermission');
  }
}
