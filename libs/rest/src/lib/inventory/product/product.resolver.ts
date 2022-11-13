import { PaginatorDto, ViewDto } from 'core/dto';
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
  read(
    @Args('paginator', { nullable: true }) paginator: PaginatorDto,
    @Args('view', { nullable: true }) view: ViewDto
  ) {
    if (view.view === true) {
      return this.viewService.find({
        where: {
          name: ILike('some'),
        },
      });
    }
    return this.service.find({
      ...paginator,
    });
  }

  @Query(() => Product)
  readById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Product)
  write(@Args('product') body: CreateProductDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  update(@Args('id') id: number, @Args('product') body: UpdateProductDto) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  delete(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Product)
  onSave() {
    return pubSub.asyncIterator('savedProduct');
  }
}
