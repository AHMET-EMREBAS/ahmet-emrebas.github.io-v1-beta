import {
  PaginatorDto,
  QueryDto,
  ViewDto,
} from 'core/dto';
import { PubSub } from 'graphql-subscriptions';

import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { Sample } from './entity/sample.entity';
import { SampleViewService } from './sample-view.service';
import { SampleService } from './sample.service';

const pubSub = new PubSub();

@Resolver(() => Sample)
export class SampleResolver {
  constructor(
    private readonly service: SampleService,
    private readonly viewService: SampleViewService
  ) {}

  @Query()
  read(
    @Args('paginator') paginatorDto: PaginatorDto,
    @Args('view') viewDto: ViewDto,
    @Args('query') query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['name', 'id', 'uuid']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Query(() => Sample)
  readById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Sample)
  write(@Args('sample') body: CreateSampleDto) {
    return this.service.save(body);
  }

  @Mutation(() => Boolean)
  update(@Args('id') id: number, @Args('sample') body: UpdateSampleDto) {
    return this.service.update(id, body);
  }

  @Mutation(() => Boolean)
  delete(@Args('id') id: number) {
    return this.service.delete(id);
  }

  @Subscription(() => Sample)
  onSave() {
    return pubSub.asyncIterator('savedSample');
  }
}
