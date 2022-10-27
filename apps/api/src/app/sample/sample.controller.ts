import {
  QueryDTO,
  ValidationPipe,
} from 'core';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { Sample } from './entities';
import { SampleService } from './sample.service';

@ApiTags(SampleController.name)
@Controller('sample')
export class SampleController {
  constructor(private readonly dataService: SampleService) {}

  @ApiOperation({ summary: 'Create entity' })
  @ApiCreatedResponse()
  @ApiUnprocessableEntityResponse()
  @Post()
  create(@Body(ValidationPipe) createDTO: CreateSampleDto) {
    return this.dataService.create(createDTO);
  }

  @ApiOperation({ summary: 'View entities' })
  @Get()
  findAll(@Query(ValidationPipe) query: QueryDTO<Sample>) {
    return this.dataService.viewAll(query);
  }

  @ApiOperation({ summary: 'View entity by id' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dataService.viewOne(id);
  }

  @ApiOperation({ summary: 'Update entity by id' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateDTO: UpdateSampleDto
  ) {
    return this.dataService.update(id, updateDTO);
  }

  @ApiOperation({ summary: 'Delete entity' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dataService.remove(id);
  }
}
