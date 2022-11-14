import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  Quantity,
  QuantityView,
  CreateQuantityDto,
  UpdateQuantityDto,
} from 'models/inventory/quantity';

import { QuantityViewService } from './quantity-view.service';
import { QuantityService } from './quantity.service';

const pubSub = new PubSub();

@Resolver(() => Quantity)
export class QuantityResolver {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService
  ) {}

  @Query(() => [Quantity])
  readQuantity(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['quantity', 'store', 'sku']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Quantity)
  readQuantityById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Quantity)
  writeQuantity(@Args('quantity') body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateQuantity(
    @Args('id') id: number,
    @Args('quantity') body: UpdateQuantityDto
  ) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteQuantity(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Quantity)
  onSaveQuantity() {
    return pubSub.asyncIterator('savedQuantity');
  }
}
