import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Sku, SkuView, CreateSkuDto, UpdateSkuDto } from '../../models/sku';

import { SkuViewService } from './sku-view.service';
import { SkuService } from './sku.service';

const pubSub = new PubSub();

@Resolver(() => Sku)
export class SkuResolver {
  constructor(
    private readonly service: SkuService,
    private readonly viewService: SkuViewService
  ) {}

  @Query(() => [Sku])
  readSku(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains([
        'id',
        'uuid',
        'name',
        'barcode',
        'description',
        'product',
      ]),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Sku)
  readSkuById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Sku)
  writeSku(@Args('sku') body: CreateSkuDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateSku(@Args('id') id: number, @Args('sku') body: UpdateSkuDto) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteSku(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Sku)
  onSaveSku() {
    return pubSub.asyncIterator('savedSku');
  }
}
