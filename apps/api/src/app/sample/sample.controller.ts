import { PaginatorDto } from 'core/dto';
import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query as ReqQuery,
} from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
} from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { SampleView } from './entity/sample-view.entity';
import { Sample } from './entity/sample.entity';

@Controller('sample')
export class SampleController {
  constructor(
    @InjectRepository(Sample)
    private readonly repo: Repository<Sample>,
    @InjectRepository(Sample)
    private readonly view: Repository<SampleView>
  ) {}

  @Query((returns) => [Sample], { description: 'Read all samples' })
  @Get()
  readAll(
    @Args('paginator', { nullable: true })
    @ReqQuery()
    paginator: PaginatorDto
  ) {
    console.log(paginator);
    paginator;
    return this.repo.find({
      ...paginator,
    });
  }

  @Mutation((r) => Sample)
  @Post()
  writeOne(@Args('sample') @Body() body: CreateSampleDto) {
    console.log(body);

    return this.repo.save(body);
  }

  @Mutation((returns) => Sample)
  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateSampleDto) {
    return this.repo.update(id, body);
  }

  @Mutation((returns) => Boolean)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.repo.delete(id);
  }
}
