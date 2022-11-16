import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  Price,
  PriceView,
  CreatePriceDto,
  UpdatePriceDto,
} from '../../models/price';

import { PriceViewService } from './price-view.service';
import { PriceService } from './price.service';

const pubSub = new PubSub();

@Resolver(() => Price)
export class PriceResolver {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService
  ) {}

  @Query(() => [Price])
  readPrice(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['price', 'cost']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Price)
  readPriceById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Price)
  writePrice(@Args('price') body: CreatePriceDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updatePrice(@Args('id') id: number, @Args('price') body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deletePrice(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Price)
  onSavePrice() {
    return pubSub.asyncIterator('savedPrice');
  }
}
