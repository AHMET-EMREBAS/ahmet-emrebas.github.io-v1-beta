import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth/decorators';

import { Price, PriceView } from './entity';

import { CreatePriceDto, UpdatePriceDto } from './dto';

import { PriceViewService } from './price-view.service';
import { PriceService } from './price.service';

const pubSub = new PubSub();

@Resolver(() => Price)
export class PriceResolver {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService
  ) {}

  @CanRead('Price')
  @Query(() => [Price])
  readPrice(
    @Args('paginator') paginatorDto: PaginatorDto<Price | PriceView>,
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

  @CanRead('Price')
  @Query(() => Price)
  readPriceById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Price')
  @Mutation(() => Price)
  writePrice(@Args('price') body: CreatePriceDto) {
    return this.service.save(body);
  }

  @CanWrite('Price')
  @Mutation(() => Boolean)
  updatePrice(@Args('id') id: number, @Args('price') body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @CanWrite('Price')
  @Mutation(() => Boolean)
  deletePrice(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Price')
  @Subscription(() => Price)
  onSavePrice() {
    return pubSub.asyncIterator('savedPrice');
  }
}
