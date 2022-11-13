import {
  PaginatorDto,
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

  @Query(() => [Sample])
  read(
    @Args('paginator', { nullable: true }) paginator: PaginatorDto,
    @Args('view', { nullable: true }) view: ViewDto
  ) {
    if (view.view === true) {
      return this.viewService.find({
        ...paginator,
      });
    }
    return this.service.find({
      ...paginator,
    });
  }

  @Query(() => Sample)
  readById(@Args('id') id: number) {
    return this.service.findOneBy({ id });
  }

  @Mutation(() => Sample)
  write(@Args('sample') body: CreateSampleDto) {
    return this.service.save(body);
  }

  @Mutation((r) => Sample)
  update(@Args('id') id: number, @Args('sample') body: CreateSampleDto) {
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
