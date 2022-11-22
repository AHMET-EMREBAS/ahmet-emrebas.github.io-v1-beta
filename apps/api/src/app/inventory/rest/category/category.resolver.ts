import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth/decorators';

import { Category, CategoryView } from './entity';

import { CreateCategoryDto, UpdateCategoryDto } from './dto';

import { CategoryViewService } from './category-view.service';
import { CategoryService } from './category.service';

const pubSub = new PubSub();

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly service: CategoryService,
    private readonly viewService: CategoryViewService
  ) {}

  @CanRead('Category')
  @Query(() => [Category])
  readCategory(
    @Args('paginator') paginatorDto: PaginatorDto<Category | CategoryView>,
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

  @CanRead('Category')
  @Query(() => Category)
  readCategoryById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Category')
  @Mutation(() => Category)
  writeCategory(@Args('category') body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @CanWrite('Category')
  @Mutation(() => Boolean)
  updateCategory(
    @Args('id') id: number,
    @Args('category') body: UpdateCategoryDto
  ) {
    return this.service.update(id, body);
  }

  @CanWrite('Category')
  @Mutation(() => Boolean)
  deleteCategory(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Category')
  @Subscription(() => Category)
  onSaveCategory() {
    return pubSub.asyncIterator('savedCategory');
  }
}
