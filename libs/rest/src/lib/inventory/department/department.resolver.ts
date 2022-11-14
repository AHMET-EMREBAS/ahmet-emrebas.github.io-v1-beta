import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  Department,
  DepartmentView,
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from 'models/inventory/department';

import { DepartmentViewService } from './department-view.service';
import { DepartmentService } from './department.service';

const pubSub = new PubSub();

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(
    private readonly service: DepartmentService,
    private readonly viewService: DepartmentViewService
  ) {}

  @Query(() => [Department])
  readDepartment(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['id', 'uuid', 'name']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Department)
  readDepartmentById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Department)
  writeDepartment(@Args('department') body: CreateDepartmentDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateDepartment(
    @Args('id') id: number,
    @Args('department') body: UpdateDepartmentDto
  ) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteDepartment(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Department)
  onSaveDepartment() {
    return pubSub.asyncIterator('savedDepartment');
  }
}
