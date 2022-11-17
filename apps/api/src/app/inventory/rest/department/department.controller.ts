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

import {
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from '../../models/department';

import { DepartmentViewService } from './department-view.service';
import { DepartmentService } from './department.service';

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  constructor(
    private readonly service: DepartmentService,
    private readonly viewService: DepartmentViewService
  ) {}

  @Get()
  readDepartment(
    @Query() paginatorDto: PaginatorDto,
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

  @Get(':id')
  readDepartmentById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @Post()
  writeDepartment(@Body() body: CreateDepartmentDto) {
    return this.service.save(body);
  }

  @Put(':id')
  updateDepartment(@Param('id') id: number, @Body() body: UpdateDepartmentDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteDepartment(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Patch()
  functions(@Query() whereDto: WhereDto, @Query() functions: FunctionsDto) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }
}
