import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth/decorators';

import { User, UserView } from './entity';

import { CreateUserDto, UpdateUserDto } from './dto';

import { UserViewService } from './user-view.service';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly service: UserService,
    private readonly viewService: UserViewService
  ) {}

  @CanRead('User')
  @Query(() => [User])
  readUser(
    @Args('paginator') paginatorDto: PaginatorDto<User | UserView>,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['username']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @CanRead('User')
  @Query(() => User)
  readUserById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('User')
  @Mutation(() => User)
  writeUser(@Args('user') body: CreateUserDto) {
    return this.service.save(body);
  }

  @CanWrite('User')
  @Mutation(() => Boolean)
  updateUser(@Args('id') id: number, @Args('user') body: UpdateUserDto) {
    return this.service.update(id, body);
  }

  @CanWrite('User')
  @Mutation(() => Boolean)
  deleteUser(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('User')
  @Subscription(() => User)
  onSaveUser() {
    return pubSub.asyncIterator('savedUser');
  }
}
