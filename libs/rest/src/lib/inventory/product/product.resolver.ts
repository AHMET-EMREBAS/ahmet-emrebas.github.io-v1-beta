import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import {
  Product,
  ProductView,
  CreateProductDto,
  UpdateProductDto,
} from 'models/inventory/product';

import { ProductViewService } from './product-view.service';
import { ProductService } from './product.service';

const pubSub = new PubSub();

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService
  ) {}

  @Query(() => [Product])
  readProduct(
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
        'description',
        'category',
        'department',
      ]),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Product)
  readProductById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Product)
  writeProduct(@Args('product') body: CreateProductDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateProduct(
    @Args('id') id: number,
    @Args('product') body: UpdateProductDto
  ) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteProduct(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Product)
  onSaveProduct() {
    return pubSub.asyncIterator('savedProduct');
  }
}
