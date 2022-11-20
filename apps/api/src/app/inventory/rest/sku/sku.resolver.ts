import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth';

import { Sku, SkuView } from './entity';

import { CreateSkuDto, UpdateSkuDto } from './dto';

import { SkuViewService } from './sku-view.service';
import { SkuService } from './sku.service';

const pubSub = new PubSub();

@Resolver(() => Sku)
export class SkuResolver {
  constructor(
    private readonly service: SkuService,
    private readonly viewService: SkuViewService
  ) {}

  @CanRead('Sku')
  @Query(() => [Sku])
  readSku(
    @Args('paginator') paginatorDto: PaginatorDto<Sku | SkuView>,
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

  @CanRead('Sku')
  @Query(() => Sku)
  readSkuById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Sku')
  @Mutation(() => Sku)
  writeSku(@Args('sku') body: CreateSkuDto) {
    return this.service.save(body);
  }

  @CanWrite('Sku')
  @Mutation(() => Boolean)
  updateSku(@Args('id') id: number, @Args('sku') body: UpdateSkuDto) {
    return this.service.update(id, body);
  }

  @CanWrite('Sku')
  @Mutation(() => Boolean)
  deleteSku(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Sku')
  @Subscription(() => Sku)
  onSaveSku() {
    return pubSub.asyncIterator('savedSku');
  }
}
