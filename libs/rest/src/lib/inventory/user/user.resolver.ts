import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  User,
  UserView,
  CreateUserDto,
  UpdateUserDto,
} from 'models/inventory/user';

import { UserViewService } from './user-view.service';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly service: UserService,
    private readonly viewService: UserViewService
  ) {}

  @Query(() => [User])
  readUser(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['username', 'permission']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => User)
  readUserById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => User)
  writeUser(@Args('user') body: CreateUserDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateUser(@Args('id') id: number, @Args('user') body: UpdateUserDto) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => User)
  onSaveUser() {
    return pubSub.asyncIterator('savedUser');
  }
}
