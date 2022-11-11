import { Repository } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Create,
  Update,
} from '../dto';
import { Model } from '../entity';
import { RESOUCE_NAME } from '../names';

@ApiTags(RESOUCE_NAME)
@Controller(RESOUCE_NAME)
export class Rest {
  constructor(
    @InjectRepository(Model) private readonly repo: Repository<Model>
  ) {}

  @Get()
  findAll() {
    return this.repo.find();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Post()
  save(@Body() body: Create) {
    console.log(body);
    return this.repo.save(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: Update) {
    return this.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.delete(id);
  }
}
