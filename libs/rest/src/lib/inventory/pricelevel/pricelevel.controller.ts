import { PaginatorDto, QueryDto, ViewDto } from 'core/dto';

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
  CreatePricelevelDto,
  UpdatePricelevelDto,
} from 'models/inventory/pricelevel';

import { PricelevelViewService } from './pricelevel-view.service';
import { PricelevelService } from './pricelevel.service';

@ApiTags('pricelevel')
@Controller('pricelevel')
export class PricelevelController {
  constructor(
    private readonly service: PricelevelService,
    private readonly viewService: PricelevelViewService
  ) {}

  @Get()
  readPricelevel(
    @Query() paginatorDto: PaginatorDto,
    @Query() viewDto: ViewDto,
    @Query() query: QueryDto
  ) {
    const q = {
      ...paginatorDto,
      where: query.toContains(['id', 'uuid', 'name']),
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @Get(':id')
  readPricelevelById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writePricelevel(@Body() body: CreatePricelevelDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updatePricelevel(@Param('id') id: number, @Body() body: UpdatePricelevelDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deletePricelevel(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
