import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';
import { PubSub } from 'graphql-subscriptions';
import { ILike } from 'typeorm';

import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { CanRead, CanWrite } from '../../auth';

import { Pricelevel, PricelevelView } from './entity';

import { CreatePricelevelDto, UpdatePricelevelDto } from './dto';

import { PricelevelViewService } from './pricelevel-view.service';
import { PricelevelService } from './pricelevel.service';

const pubSub = new PubSub();

@Resolver(() => Pricelevel)
export class PricelevelResolver {
  constructor(
    private readonly service: PricelevelService,
    private readonly viewService: PricelevelViewService
  ) {}

  @CanRead('Pricelevel')
  @Query(() => [Pricelevel])
  readPricelevel(
    @Args('paginator') paginatorDto: PaginatorDto<Pricelevel | PricelevelView>,
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

  @CanRead('Pricelevel')
  @Query(() => Pricelevel)
  readPricelevelById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }
  @CanWrite('Pricelevel')
  @Mutation(() => Pricelevel)
  writePricelevel(@Args('pricelevel') body: CreatePricelevelDto) {
    return this.service.save(body);
  }

  @CanWrite('Pricelevel')
  @Mutation(() => Boolean)
  updatePricelevel(
    @Args('id') id: number,
    @Args('pricelevel') body: UpdatePricelevelDto
  ) {
    return this.service.update(id, body);
  }

  @CanWrite('Pricelevel')
  @Mutation(() => Boolean)
  deletePricelevel(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @CanWrite('Pricelevel')
  @Subscription(() => Pricelevel)
  onSavePricelevel() {
    return pubSub.asyncIterator('savedPricelevel');
  }
}
