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
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from 'models/inventory/department';

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
}
