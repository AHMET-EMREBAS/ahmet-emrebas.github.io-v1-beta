import {
  PaginatorDto,
  ViewDto,
} from 'core/dto';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { SampleViewService } from './sample-view.service';
import { SampleService } from './sample.service';

@ApiTags('sample')
@Controller('sample')
export class SampleController {
  constructor(
    private readonly service: SampleService,
    private readonly viewService: SampleViewService
  ) {}

  @Get()
  read(@Query() paginator: PaginatorDto, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.find({
        ...paginator,
      });
    }
    return this.service.find({
      ...paginator,
    });
  }

  @Get('id')
  readById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy({ id });
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  write(@Body() body: CreateSampleDto) {
    return this.service.save(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateSampleDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
