import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth/decorators';

import { Quantity, QuantityView } from './entity';

import { CreateQuantityDto, UpdateQuantityDto } from './dto';

import { QuantityViewService } from './quantity-view.service';
import { QuantityService } from './quantity.service';

const pubSub = new PubSub();

@Resolver(() => Quantity)
export class QuantityResolver {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService
  ) {}

  @CanRead('Quantity')
  @Query(() => [Quantity])
  readQuantity(
    @Args('paginator') paginatorDto: PaginatorDto<Quantity | QuantityView>,
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

  @CanRead('Quantity')
  @Query(() => Quantity)
  readQuantityById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Quantity')
  @Mutation(() => Quantity)
  writeQuantity(@Args('quantity') body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @CanWrite('Quantity')
  @Mutation(() => Boolean)
  updateQuantity(
    @Args('id') id: number,
    @Args('quantity') body: UpdateQuantityDto
  ) {
    return this.service.update(id, body);
  }

  @CanWrite('Quantity')
  @Mutation(() => Boolean)
  deleteQuantity(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Quantity')
  @Subscription(() => Quantity)
  onSaveQuantity() {
    return pubSub.asyncIterator('savedQuantity');
  }
}
