import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Patch,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  FunctionsDto,
  PaginatorDto,
  QueryDto,
  ViewDto,
  WhereDto,
} from 'core/dto';

import { CanRead, CanWrite } from '../../auth';

import { Pricelevel, PricelevelView } from './entity';
import { CreatePricelevelDto, UpdatePricelevelDto } from './dto';

import { PricelevelViewService } from './pricelevel-view.service';
import { PricelevelService } from './pricelevel.service';

@ApiTags('pricelevel')
@Controller('pricelevel')
export class PricelevelController {
  constructor(
    private readonly service: PricelevelService,
    private readonly viewService: PricelevelViewService
  ) {}
  @CanRead('pricelevel')
  @Get()
  readPricelevel(
    @Query() paginatorDto: PaginatorDto<Pricelevel | PricelevelView>,
    @Query() viewDto: ViewDto,
    @Query() whereDto: WhereDto
  ) {
    const q = {
      ...paginatorDto,
      where: whereDto.where,
    };

    if (viewDto.view === true) {
      return this.viewService.find(q);
    }
    return this.service.find(q);
  }

  @CanRead('pricelevel')
  @Get(':id')
  readPricelevelById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('pricelevel')
  @Post()
  writePricelevel(@Body() body: CreatePricelevelDto) {
    return this.service.save(body);
  }

  @CanWrite('pricelevel')
  @Put(':id')
  updatePricelevel(@Param('id') id: number, @Body() body: UpdatePricelevelDto) {
    return this.service.update(id, body);
  }

  @CanWrite('pricelevel')
  @Delete(':id')
  deletePricelevel(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('pricelevel')
  @Patch()
  functionsPricelevel(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }
}
