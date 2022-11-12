import { PubSub } from 'graphql-subscriptions';
import { Repository } from 'typeorm';

import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';

import { SampleEntity } from './entity/sample.entity';
import { SampleModel } from './entity/sample.model';

const pubSub = new PubSub();

@Resolver((of) => SampleModel)
export class SampleResolver {
  constructor(
    @InjectRepository(SampleEntity)
    private readonly repo: Repository<SampleEntity>
  ) {}

  @Query((returns) => [SampleModel], { description: 'Read all samples' })
  readAll() {
    return this.repo.find();
  }

  @Query((returns) => SampleModel)
  readOne(@Args('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Mutation((returns) => Boolean)
  async deleteOne(@Args('id') id: string) {
    const deleted = await this.repo.delete(id);
    return !!deleted;
  }

  @Subscription((returns) => SampleModel)
  onWriteOne() {
    return pubSub.asyncIterator('sampleAdded');
  }
}
