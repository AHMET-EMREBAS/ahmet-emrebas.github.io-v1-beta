import {
  PaginatorDto,
  QueryDto,
  ViewDto,
} from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import {
  Category,
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'models/inventory/category';

import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { CategoryViewService } from './category-view.service';
import { CategoryService } from './category.service';

const pubSub = new PubSub();

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly service: CategoryService,
    private readonly viewService: CategoryViewService
  ) {}

  @Query(() => [Category])
  readCategory(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['id', 'uuid', 'name']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Category)
  readCategoryById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Category)
  writeCategory(@Args('category') body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  updateCategory(
    @Args('id') id: number,
    @Args('category') body: UpdateCategoryDto
  ) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  deleteCategory(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Category)
  onSaveCategory() {
    return pubSub.asyncIterator('savedCategory');
  }
}
