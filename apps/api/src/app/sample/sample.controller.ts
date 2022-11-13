import {
  PaginatorDto,
  QueryDto,
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

import {
  CreateSampleDto,
  UpdateSampleDto,
} from './dto';
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
  read(
    @Query() paginatorDto: PaginatorDto,
    @Query() viewDto: ViewDto,
    @Query() query: QueryDto
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

  @Get(':id')
  readById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
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

  @Post(':id/category/:categoryId')
  setCategory(id: number, categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @Post(':id/category')
  unsetCategory(id: number) {
    return this.service.unset(id, 'category');
  }

  @Post(':id/department/:rid')
  addDepartment(id: number, rid: number) {
    return this.service.add(id, rid, 'department');
  }

  @Post(':id/department/:rid')
  removeDepartment(id: number, rid: number) {
    return this.service.remove(id, rid, 'department');
  }
}
