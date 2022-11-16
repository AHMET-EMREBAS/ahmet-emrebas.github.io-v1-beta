import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  Store,
  StoreView,
  CreateStoreDto,
  UpdateStoreDto,
} from '../../models/store';

import { StoreViewService } from './store-view.service';
import { StoreService } from './store.service';

const pubSub = new PubSub();

@Resolver(() => Store)
export class StoreResolver {
  constructor(
    private readonly service: StoreService,
    private readonly viewService: StoreViewService
  ) {}

  @Query(() => [Store])
  readStore(
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

  @Query(() => Store)
  readStoreById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Store)
  writeStore(@Args('store') body: CreateStoreDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateStore(@Args('id') id: number, @Args('store') body: UpdateStoreDto) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteStore(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Store)
  onSaveStore() {
    return pubSub.asyncIterator('savedStore');
  }
}
