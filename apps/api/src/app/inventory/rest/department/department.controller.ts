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

import { CanRead, CanWrite } from '../../auth/decorators';

import { Department, DepartmentView } from './entity';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';

import { DepartmentViewService } from './department-view.service';
import { DepartmentService } from './department.service';

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  constructor(
    private readonly service: DepartmentService,
    private readonly viewService: DepartmentViewService
  ) {}
  @CanRead('department')
  @Get()
  readDepartment(
    @Query() paginatorDto: PaginatorDto<Department | DepartmentView>,
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

  @CanRead('department')
  @Get(':id')
  readDepartmentById(@Param('id') id: number, @Query() view: ViewDto) {
    if (view.view === true) {
      return this.viewService.findOneBy();
    }
    return this.service.findOneBy({ id });
  }

  @CanWrite('department')
  @Post()
  writeDepartment(@Body() body: CreateDepartmentDto) {
    return this.service.save(body);
  }

  @CanWrite('department')
  @Put(':id')
  updateDepartment(@Param('id') id: number, @Body() body: UpdateDepartmentDto) {
    return this.service.update(id, body);
  }

  @CanWrite('department')
  @Delete(':id')
  deleteDepartment(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @CanRead('department')
  @Patch()
  functionsDepartment(
    @Query() whereDto: WhereDto,
    @Query() functions: FunctionsDto
  ) {
    if (functions.query === 'count') {
      return this.viewService.count({ where: whereDto.where });
    }
    throw new BadRequestException('Must provide a fucntion name.');
  }
}
