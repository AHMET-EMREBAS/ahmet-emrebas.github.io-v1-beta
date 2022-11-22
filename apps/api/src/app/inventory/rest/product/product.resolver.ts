import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth/decorators';

import { Product, ProductView } from './entity';

import { CreateProductDto, UpdateProductDto } from './dto';

import { ProductViewService } from './product-view.service';
import { ProductService } from './product.service';

const pubSub = new PubSub();

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService
  ) {}

  @CanRead('Product')
  @Query(() => [Product])
  readProduct(
    @Args('paginator') paginatorDto: PaginatorDto<Product | ProductView>,
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

  @CanRead('Product')
  @Query(() => Product)
  readProductById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Product')
  @Mutation(() => Product)
  writeProduct(@Args('product') body: CreateProductDto) {
    return this.service.save(body);
  }

  @CanWrite('Product')
  @Mutation(() => Boolean)
  updateProduct(
    @Args('id') id: number,
    @Args('product') body: UpdateProductDto
  ) {
    return this.service.update(id, body);
  }

  @CanWrite('Product')
  @Mutation(() => Boolean)
  deleteProduct(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Product')
  @Subscription(() => Product)
  onSaveProduct() {
    return pubSub.asyncIterator('savedProduct');
  }
}
