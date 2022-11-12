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
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { SampleEntity } from './entity/sample.entity';

@Controller('sample')
export class SampleController {
  constructor(
    @InjectRepository(SampleEntity)
    private readonly repo: Repository<SampleEntity>
  ) {}

  @Get()
  read() {
    return this.repo.find();
  }

  @Post()
  write(@Body() body: CreateSampleDto) {
    return this.repo.save(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateSampleDto) {
    return this.repo.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.repo.delete(id);
  }
}
