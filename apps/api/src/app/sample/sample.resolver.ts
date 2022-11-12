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

import { CreateSampleDto } from './dto/create-sample.dto';
import { Sample } from './entity/sample.entity';

const pubSub = new PubSub();

@Resolver((of) => Sample)
export class SampleResolver {
  constructor(
    @InjectRepository(Sample)
    private readonly repo: Repository<Sample>
  ) {}

  @Query((returns) => [Sample], { description: 'Read all samples' })
  readAll() {
    return this.repo.find();
  }

  @Query((returns) => Sample)
  readOne(@Args('id') id: number) {
    return this.repo.findOneBy({});
  }

  @Mutation((r) => Sample)
  writeOne(@Args('sample') body: CreateSampleDto) {
    return this.repo.save(body);
  }

  @Mutation((returns) => Boolean)
  async deleteOne(@Args('id') id: string) {
    const deleted = await this.repo.delete(id);
    return !!deleted;
  }

  @Subscription((returns) => Sample)
  onWriteOne() {
    return pubSub.asyncIterator('sampleAdded');
  }
}
